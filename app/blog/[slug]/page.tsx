import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Clock, Calendar, ArrowLeft } from 'lucide-react'
import { blogPosts, getBlogPostBySlug } from '@/lib/blog-data'
import { BLOG_SLUGS, SITE_URL } from '@/lib/constants'
import { blogPostSchema, breadcrumbSchema } from '@/lib/schema'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { Badge } from '@/components/ui/badge'
import { FinalCTA } from '@/components/sections/FinalCTA'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      title: post.ogTitle,
      description: post.ogDescription,
      url: `${SITE_URL}/blog/${slug}`,
      type: 'article',
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const blogJsonLd = blogPostSchema({
    headline: post.title,
    description: post.metaDescription,
    url: `${SITE_URL}/blog/${slug}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    image: post.image,
  })
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'Blog', item: `${SITE_URL}/blog` },
    { name: post.title, item: `${SITE_URL}/blog/${slug}` },
  ])

  const formattedDate = new Date(post.datePublished).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  // Get 3 related posts (same category or just latest)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3)
  const fallbackRelated = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)
  const toShow = relatedPosts.length >= 2 ? relatedPosts : fallbackRelated

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <section className="bg-securenext-navy py-16" aria-labelledby="post-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.category },
            ]}
          />
          <Badge variant="default" className="mt-5 mb-4">{post.category}</Badge>
          <h1 id="post-heading" className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            {post.h1}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-white/60 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <time dateTime={post.datePublished}>{formattedDate}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article layout: content + sidebar */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">

            {/* Main content */}
            <article aria-labelledby="post-heading">
              <div className="prose-securenext">
                {post.body.split('\n\n').map((block, i) => {
                  // Heading detection
                  if (block.startsWith('**') && block.endsWith('**') && block.split('\n').length === 1) {
                    const text = block.replace(/^\*\*|\*\*$/g, '')
                    return <h2 key={i} className="text-2xl font-bold text-securenext-navy mt-8 mb-4">{text}</h2>
                  }
                  // Table detection
                  if (block.includes('|---|')) {
                    const rows = block.split('\n').filter(Boolean)
                    const headers = rows[0].split('|').filter(Boolean).map(s => s.trim())
                    const body = rows.slice(2)
                    return (
                      <div key={i} className="overflow-x-auto mb-6">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr>
                              {headers.map((h, j) => (
                                <th key={j} className="bg-securenext-gray font-semibold text-left px-4 py-3 border-b-2 border-gray-200 text-securenext-navy">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {body.map((row, j) => {
                              const cells = row.split('|').filter(Boolean).map(s => s.trim())
                              return (
                                <tr key={j} className="border-b border-gray-100">
                                  {cells.map((cell, k) => (
                                    <td key={k} className="px-4 py-3 text-gray-700">{cell}</td>
                                  ))}
                                </tr>
                              )
                            })}
                          </tbody>
                        </table>
                      </div>
                    )
                  }
                  // Bold inline text within paragraph
                  const rendered = block.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                  // Link detection — simple markdown [text](url)
                  const withLinks = rendered.replace(
                    /\[([^\]]+)\]\(([^)]+)\)/g,
                    '<a href="$2" class="text-securenext-accent underline hover:text-securenext-accent-dark">$1</a>'
                  )
                  return (
                    <p
                      key={i}
                      className="text-gray-700 leading-relaxed mb-5 text-[17px]"
                      dangerouslySetInnerHTML={{ __html: withLinks }}
                    />
                  )
                })}
              </div>

              {/* Related service CTA */}
              {post.relatedService && (
                <div className="mt-10 p-6 bg-securenext-gray rounded-xl border-l-4 border-securenext-accent">
                  <p className="font-semibold text-securenext-navy mb-2">Ready to take action?</p>
                  <Link
                    href={post.relatedService}
                    className="text-securenext-accent font-semibold hover:text-securenext-accent-dark transition-colors underline"
                  >
                    Learn more about the relevant service →
                  </Link>
                </div>
              )}

              <div className="mt-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-securenext-navy hover:text-securenext-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-securenext-accent focus-visible:ring-offset-2 rounded-sm"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  Back to Blog
                </Link>
              </div>
            </article>

            {/* Sidebar — sticky on desktop */}
            <aside className="lg:sticky lg:top-24 self-start flex flex-col gap-6" aria-label="Blog sidebar">
              {/* Assessment CTA */}
              <div className="bg-securenext-navy rounded-xl p-6 text-white">
                <h3 className="font-semibold text-lg mb-3">Free Security Assessment</h3>
                <p className="text-sm text-white/70 mb-5">
                  Know exactly where your organization stands — with no commitment required.
                </p>
                <Link
                  href="/contact#assessment-form"
                  className="block text-center py-3 bg-securenext-accent hover:bg-securenext-accent-dark text-white font-semibold text-sm rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-securenext-navy"
                >
                  Request Assessment
                </Link>
              </div>

              {/* Related posts */}
              {toShow.length > 0 && (
                <div className="bg-securenext-gray rounded-xl p-6">
                  <h3 className="font-semibold text-securenext-navy mb-4">Related Articles</h3>
                  <div className="flex flex-col gap-4">
                    {toShow.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="group flex flex-col gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-securenext-accent focus-visible:ring-offset-2 rounded-sm"
                      >
                        <Badge variant="default" className="w-fit text-xs">{related.category}</Badge>
                        <span className="text-sm font-medium text-securenext-navy group-hover:text-securenext-accent transition-colors leading-snug">
                          {related.title}
                        </span>
                        <span className="text-xs text-gray-400">{related.readTime}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Services quick links */}
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-semibold text-securenext-navy mb-4">Our Services</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: 'Cybersecurity Consulting', href: '/services/cybersecurity-consulting' },
                    { label: 'Network Security Assessments', href: '/services/network-security-assessments' },
                    { label: 'HIPAA Compliance', href: '/services/security-risk-compliance' },
                    { label: 'Incident Response', href: '/services/incident-response' },
                    { label: 'Penetration Testing', href: '/services/penetration-testing' },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-securenext-accent hover:text-securenext-accent-dark font-medium transition-colors"
                      >
                        {link.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <FinalCTA />
    </>
  )
}
