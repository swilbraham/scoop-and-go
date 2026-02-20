import { motion } from 'framer-motion'
import { HiPhone } from 'react-icons/hi'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-cream via-warm-white to-warm-white pt-24 lg:pt-24"
    >
      {/* Decorative blobs */}
      <div className="blob-shape absolute -top-32 -right-32 h-96 w-96 bg-sage-light/20" />
      <div className="blob-shape-2 absolute -bottom-20 -left-20 h-72 w-72 bg-earth-light/15" />
      <div className="blob-shape absolute top-1/3 right-1/4 hidden h-40 w-40 bg-sky-light/15 lg:block" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:min-h-screen lg:py-0">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left lg:flex lg:flex-col lg:justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="mb-4 inline-block rounded-full bg-sage-light/30 px-5 py-2 font-heading text-sm font-semibold text-forest">
              Serving Merseyside & Cheshire
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-heading text-4xl font-bold leading-tight text-charcoal sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            A Cleaner Garden,{' '}
            <span className="text-forest">Happier Paws</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal-light sm:text-xl mx-auto lg:mx-0"
          >
            Professional dog waste removal for homes and businesses across
            Merseyside & Cheshire. We scoop it, bag it, and take it away — so
            you can enjoy your outdoor space again.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href="#quote"
              className="w-full sm:w-auto rounded-full bg-forest px-8 py-4 text-center font-heading text-lg font-bold text-white shadow-xl shadow-forest/25 transition-all hover:bg-sage-dark hover:shadow-2xl hover:-translate-y-0.5"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:07724564683"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-forest/20 bg-white/60 px-8 py-4 font-heading text-lg font-bold text-forest backdrop-blur-sm transition-all hover:border-forest/40 hover:bg-white"
            >
              <HiPhone className="text-xl" />
              07724 564683
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-10 flex items-center justify-center gap-6 text-sm text-charcoal-light lg:justify-start"
          >
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-sage" />
              Fully Insured
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-sage" />
              Reliable & Discreet
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-sage" />
              Eco-Friendly
            </span>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative flex-1"
        >
          <div className="relative mx-auto w-72 sm:w-80 lg:w-full max-w-lg">
            {/* Organic frame */}
            <div className="blob-shape absolute inset-0 bg-gradient-to-br from-sage-light/40 to-earth-light/30 scale-105" />
            <img
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=700&fit=crop&crop=faces"
              alt="Happy golden retriever sitting in a lush green garden"
              className="blob-shape relative z-10 h-80 w-full object-cover shadow-2xl sm:h-96 lg:h-[500px]"
              loading="eager"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 z-20 rounded-2xl bg-white px-5 py-3 shadow-xl lg:-bottom-6 lg:-left-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🐕</span>
                <div>
                  <p className="font-heading text-xs font-bold text-forest">Trusted by</p>
                  <p className="font-heading text-sm font-bold text-charcoal">500+ Customers</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full">
          <path
            d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V100H0V40Z"
            fill="var(--color-warm-white)"
          />
        </svg>
      </div>
    </section>
  )
}
