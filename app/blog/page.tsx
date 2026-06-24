import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import { breadcrumbSchema } from '@/lib/schema'
import { blogPosts, BLOG_CATEGORIES } from '@/lib/blog-data'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { BlogCard } from '@/components/shared/BlogCard'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: `Cybersecurity Blog | ${SITE_NAME} Chicago`,
  description:
    'Cybersecurity insights, compliance guides, and network security tips for Chicago-area businesses and organizations. Explore the SecureNext blog.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: `Cybersecurity Blog | ${SITE_NAME} Chicago`,
    description:
      'Cybersecurity insights, compliance guides, and network security tips for Chicago-area businesses and organizations. Explore the SecureNext blog.',
    url: `${SITE_URL}/blog`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Cybersecurity Blog | ${SITE_NAME} Chicago`,
    description:
      'Cybersecurity insights, compliance guides, and network security tips for Chicago-area businesses and organizations. Explore the SecureNext blog.',
  },
}

export default function BlogPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', item: SITE_URL },
    { name: 'Blog', item: `${SITE_URL}/blog` },
  ])

  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="bg-securenext-navy py-16 lg:py-20" aria-labelledby="blog-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Blog' }]} />
          <h1 id="blog-heading" className="mt-6 text-4xl sm:text-5xl font-bold text-white">
            Cybersecurity Insights for Chicago Organizations
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            Security assessments, compliance guidance, and threat landscape analysis — written for decision-makers and technical teams across the Chicago metro.
          </p>
        </div>
      </section>

      <section className="py-16 bg-securenext-gray" aria-label="Blog posts">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-10" role="navigation" aria-label="Blog categories">
            <span className="px-4 py-2 bg-securenext-navy text-white text-sm font-semibold rounded-full">
              All Posts
            </span>
            {BLOG_CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 bg-white text-securenext-navy text-sm font-medium rounded-full border border-gray-200 cursor-default"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPosts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                readTime={post.readTime}
                datePublished={post.datePublished}
                className="h-full"
              />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
