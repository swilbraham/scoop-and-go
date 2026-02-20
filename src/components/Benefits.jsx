import { motion } from 'framer-motion'
import {
  HiShieldCheck,
  HiSparkles,
  HiClock,
  HiHeart,
  HiHome,
  HiRefresh,
} from 'react-icons/hi'

const benefits = [
  {
    icon: HiSparkles,
    title: 'Spotless Garden',
    description:
      'We thoroughly clear every trace of dog waste so your lawn looks and smells fresh and inviting.',
  },
  {
    icon: HiShieldCheck,
    title: 'Safe for Everyone',
    description:
      'Protect your family, children, and pets from harmful bacteria. A clean garden is a healthy garden.',
  },
  {
    icon: HiClock,
    title: 'Save Your Time',
    description:
      'Reclaim your weekends. We handle the dirty work on a regular schedule that suits you.',
  },
  {
    icon: HiHeart,
    title: 'Love Your Garden Again',
    description:
      'Host barbecues, let the kids play freely, and actually enjoy your outdoor space.',
  },
  {
    icon: HiHome,
    title: 'Homes & Businesses',
    description:
      'Whether it\'s your back garden or commercial grounds, we keep outdoor spaces clean and presentable.',
  },
  {
    icon: HiRefresh,
    title: 'Regular or One-Off',
    description:
      'Choose weekly, fortnightly, or a one-off deep clean. Flexible service to fit your needs.',
  },
]

const vp = { once: true, amount: 0 }

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden bg-gradient-to-b from-warm-white to-cream py-16 lg:py-20"
    >
      <div className="blob-shape absolute top-20 -right-20 h-72 w-72 bg-sage-light/10" />
      <div className="blob-shape-2 absolute bottom-10 -left-10 h-48 w-48 bg-sky-light/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-sage-light/30 px-5 py-2 font-heading text-sm font-semibold text-forest">
            Why Choose Scoop & Go
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
            The Clean Garden Solution
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal-light">
            We take the hassle out of garden maintenance so you can focus on
            what matters most.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group rounded-3xl bg-white/80 p-8 shadow-sm backdrop-blur-sm transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-light/25 text-forest transition-colors group-hover:bg-sage-light/40">
                <benefit.icon className="text-2xl" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold text-charcoal">
                {benefit.title}
              </h3>
              <p className="mt-3 leading-relaxed text-charcoal-light">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
