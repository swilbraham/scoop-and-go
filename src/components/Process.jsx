import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Get in Touch',
    description:
      'Give us a call or fill in the quote form. Tell us about your garden, how many dogs you have, and how often you\'d like us to visit.',
    icon: '📞',
  },
  {
    number: '02',
    title: 'We Quote & Schedule',
    description:
      'We\'ll give you a fair, no-obligation quote and arrange a time that works for you — regular or one-off.',
    icon: '📋',
  },
  {
    number: '03',
    title: 'We Scoop & Go',
    description:
      'Our team arrives, thoroughly clears all dog waste from your garden, bags it up, and takes it away. Simple as that.',
    icon: '✨',
  },
  {
    number: '04',
    title: 'Enjoy Your Garden',
    description:
      'Step outside with confidence. Your garden is fresh, clean, and safe for the whole family to enjoy.',
    icon: '🌿',
  },
]

const vp = { once: true, amount: 0 }

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-16 lg:py-20">
      <div className="blob-shape absolute top-1/4 -left-16 h-56 w-56 bg-sage-light/8" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-sky-light/30 px-5 py-2 font-heading text-sm font-semibold text-bark">
            Simple Process
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal-light">
            Getting started is easy. Four simple steps to a cleaner,
            healthier garden.
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* Connecting line (desktop) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-sage-light/40 via-sage/30 to-sage-light/40 lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={vp}
                transition={{ duration: 0.7, delay: 0.1 * i }}
                className={`relative lg:flex lg:items-center lg:gap-16 lg:py-10 ${
                  i % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                  }`}
                >
                  <div
                    className={`rounded-3xl border border-sage-light/20 bg-white/60 p-8 backdrop-blur-sm ${
                      i % 2 === 0 ? 'lg:ml-auto lg:mr-0' : 'lg:mr-auto lg:ml-0'
                    } max-w-md`}
                  >
                    <span className="text-4xl">{step.icon}</span>
                    <h3 className="mt-3 font-heading text-xl font-bold text-charcoal">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-charcoal-light">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center number circle */}
                <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-forest font-heading text-lg font-bold text-white shadow-lg shadow-forest/30">
                    {step.number}
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden flex-1 lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
