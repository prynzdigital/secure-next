'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { BadgeCheck, Lightbulb, Lock, Star, Clock, Handshake } from 'lucide-react'

const values = [
  {
    icon: BadgeCheck,
    headline: 'We Tell You What You Need to Hear',
    description:
      'We do not oversell services you do not need or downplay findings to keep engagements comfortable. If your network has a serious vulnerability, we say so plainly — and we help you address it in an order of priority that makes sense for your organization. That directness is rare. We consider it non-negotiable.',
  },
  {
    icon: Lightbulb,
    headline: 'Current Methods, Not Yesterday’s Playbook',
    description:
      "The threat environment changes continuously. Our team tracks adversary techniques, evolving compliance requirements, and emerging tooling so our recommendations reflect today’s threat landscape — not a methodology that was current three years ago. We bring that current thinking to every engagement.",
  },
  {
    icon: Lock,
    headline: 'Security Is the Whole Practice, Not an Add-On',
    description:
      'We are not a generalist IT firm that added a “cybersecurity services” tab to the website. Security is the entirety of what we do — every staff member, every engagement, every methodology. That specialization produces a different quality of output than a generalist firm operating outside its core expertise.',
  },
  {
    icon: Star,
    headline: 'Deliverables That Hold Up Under Audit',
    description:
      'Whether we are producing a network assessment report, a HIPAA risk analysis, or a penetration test finding, our deliverables are written and structured as if a regulator, a board, or an outside auditor will read them. That standard produces documentation clients can actually rely on.',
  },
  {
    icon: Clock,
    headline: 'Available When It Matters Most',
    description:
      'Security does not keep business hours. We are reachable when clients have questions, and we respond to incidents with appropriate urgency. [NEEDS CLIENT INPUT: confirm availability hours and response SLA for after-hours incident response] Reliability is not a marketing claim — it is a practice requirement.',
  },
  {
    icon: Handshake,
    headline: 'Your Outcome Is Our Measure of Success',
    description:
      'We do not define success by the size of an engagement or the number of services on an invoice. We define it by whether our clients are measurably more secure, more compliant, and more confident in their security posture after working with us. That orientation produces long-term relationships, not one-time transactions.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export function WhyChooseUs() {
  const prefersReducedMotion = useReducedMotion()

  const activeContainerVariants = prefersReducedMotion
    ? { hidden: {}, visible: {} }
    : containerVariants

  const activeCardVariants = prefersReducedMotion
    ? { hidden: {}, visible: {} }
    : cardVariants

  return (
    <section className="py-16 lg:py-24 bg-white" aria-labelledby="why-choose-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="why-choose-heading" className="text-3xl sm:text-4xl font-bold text-securenext-navy">
            Why Organizations Choose SecureNext
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            There are other cybersecurity firms. Here is why Chicago organizations consistently choose us.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={activeContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {values.map((value) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.headline}
                variants={activeCardVariants}
                className="flex flex-col p-6 bg-securenext-gray rounded-xl border border-securenext-silver/20 hover:border-securenext-accent/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-securenext-accent/10 text-securenext-accent mb-4">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-securenext-navy text-lg mb-3 leading-snug">
                  {value.headline}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
