import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'

const credentials = [
  'Fully insured & DBS checked',
  'Serving Merseyside & Cheshire since day one',
  'Eco-friendly waste disposal',
  'Flexible scheduling — weekly, fortnightly, or one-off',
  'Domestic & commercial customers welcome',
  'Discreet, professional service',
]

const areas = [
  'Liverpool',
  'Birkenhead',
  'Prenton',
  'Wallasey',
  'Bebington',
  'Heswall',
  'West Kirby',
  'Neston',
  'Ellesmere Port',
  'Chester',
  'Northwich',
  'Warrington',
  'Widnes',
  'Runcorn',
  'St Helens',
  'Bootle',
  'Crosby',
  'Southport',
  'Formby',
  'Maghull',
  'Knowsley',
  'Huyton',
  'Prescot',
  'Kirkby',
]

const vp = { once: true, amount: 0 }

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-16 lg:py-20">
      <div className="blob-shape absolute -top-10 -right-10 h-60 w-60 bg-sky-light/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="blob-shape-2 absolute inset-0 bg-gradient-to-br from-sage-light/30 to-sky-light/20 scale-105" />
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=500&fit=crop&crop=faces"
              alt="Cute dog relaxing in a clean, well-maintained garden"
              className="blob-shape-2 relative z-10 w-full object-cover shadow-xl h-80 lg:h-[420px]"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 z-20 rounded-2xl bg-white px-6 py-4 shadow-xl lg:-bottom-6 lg:-right-6">
              <p className="font-heading text-3xl font-bold text-forest">5+</p>
              <p className="font-heading text-sm font-semibold text-charcoal-light">
                Years Serving<br />Our Community
              </p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block rounded-full bg-sage-light/30 px-5 py-2 font-heading text-sm font-semibold text-forest">
              About Us
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-charcoal sm:text-4xl">
              Your Local Dog Waste Specialists
            </h2>
            <p className="mt-5 leading-relaxed text-charcoal-light">
              Scoop & Go was founded by a dog lover who knew there had to be a
              better way. We understand that dog owners adore their pets but
              don't always have the time — or the stomach — to keep on top of
              the mess.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal-light">
              We provide a professional, reliable, and discreet service to
              domestic and business customers across Merseyside and Cheshire.
              Whether you have one small dog or a whole pack, we'll keep your
              garden spotless.
            </p>

            <div className="mt-8 space-y-3">
              {credentials.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <HiCheckCircle className="mt-0.5 flex-shrink-0 text-xl text-sage" />
                  <span className="text-charcoal-light">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Areas We Cover */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <h3 className="text-center font-heading text-2xl font-bold text-charcoal sm:text-3xl">
            Areas We Cover
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-charcoal-light">
            We proudly serve customers across these towns and cities throughout
            Merseyside and Cheshire.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-sage-light/40 bg-white/60 px-4 py-2 font-heading text-sm font-medium text-charcoal-light backdrop-blur-sm transition-colors hover:border-sage hover:bg-sage-light/20 hover:text-forest"
              >
                {area}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
