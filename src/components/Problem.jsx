import { motion } from 'framer-motion'

const painPoints = [
  {
    emoji: '😩',
    title: 'Stepping in surprises',
    description:
      'Nothing ruins a relaxing walk in your own garden like an unexpected squelch underfoot.',
  },
  {
    emoji: '🚫',
    title: 'Kids can\'t play safely',
    description:
      'Dog mess is more than just unpleasant — it carries harmful bacteria like E. coli and roundworm that can be dangerous for children.',
  },
  {
    emoji: '⏰',
    title: 'No time to keep up',
    description:
      'Between work, family, and life, scooping the garden falls to the bottom of the list. Before you know it, it\'s piled up.',
  },
  {
    emoji: '😤',
    title: 'Embarrassed to invite guests',
    description:
      'A messy garden means no barbecues, no garden parties, no letting the kids have friends over to play.',
  },
]

const vp = { once: true, amount: 0 }

export default function Problem() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <div className="blob-shape-2 absolute -top-16 -left-16 h-64 w-64 bg-earth-light/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-earth-light/30 px-5 py-2 font-heading text-sm font-semibold text-bark">
            Sound Familiar?
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
            Dog Mess Taking Over Your Garden?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal-light">
            You love your dog — but dealing with the mess? Not so much.
            If any of these sound like you, we can help.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group relative overflow-hidden rounded-3xl border border-earth-light/30 bg-cream/50 p-8 backdrop-blur-sm transition-all hover:border-earth-light/60 hover:shadow-lg"
            >
              <div className="blob-shape absolute -top-6 -right-6 h-24 w-24 bg-earth-light/10 transition-transform group-hover:scale-110" />
              <span className="relative text-4xl">{point.emoji}</span>
              <h3 className="relative mt-4 font-heading text-xl font-bold text-charcoal">
                {point.title}
              </h3>
              <p className="relative mt-2 leading-relaxed text-charcoal-light">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
