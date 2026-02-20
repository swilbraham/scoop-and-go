import { motion } from 'framer-motion'
import { HiPhone } from 'react-icons/hi'

const vp = { once: true, amount: 0 }

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <div className="blob-shape absolute -top-20 left-1/4 h-80 w-80 bg-sage-light/10" />
      <div className="blob-shape-2 absolute -bottom-10 right-1/4 h-60 w-60 bg-earth-light/10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
      >
        <div className="rounded-[2rem] bg-gradient-to-br from-forest to-sage-dark p-10 shadow-2xl sm:p-16 lg:p-20">
          <span className="text-5xl">🐾</span>
          <h2 className="mt-6 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready for a Cleaner Garden?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            Join hundreds of happy customers across Merseyside and Cheshire.
            Get your free, no-obligation quote today — or just give us a call
            for a friendly chat.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#quote"
              className="w-full sm:w-auto rounded-full bg-white px-8 py-4 text-center font-heading text-lg font-bold text-forest shadow-xl transition-all hover:bg-cream hover:shadow-2xl hover:-translate-y-0.5"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:07724564683"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 font-heading text-lg font-bold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10"
            >
              <HiPhone className="text-xl" />
              07724 564683
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
