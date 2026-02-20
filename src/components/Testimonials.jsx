import { motion } from 'framer-motion'
import { useState } from 'react'
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Prenton, Wirral',
    text: 'Absolute lifesaver! With two Labradors and a busy work schedule, I just couldn\'t keep up. Scoop & Go come every week and my garden has never looked better. The kids can actually play outside again.',
    dogs: '2 Labradors',
    rating: 5,
  },
  {
    name: 'James T.',
    location: 'Liverpool',
    text: 'We run a small care home and the communal garden was becoming a real issue with residents\' dogs. Scoop & Go handle it professionally and discreetly. Brilliant service and very reasonably priced.',
    dogs: 'Business Customer',
    rating: 5,
  },
  {
    name: 'Linda & Dave P.',
    location: 'Chester',
    text: 'We were embarrassed to have anyone round because of the state of the back garden. After just one visit from Scoop & Go, it was spotless. We\'re now on a fortnightly plan and couldn\'t be happier.',
    dogs: '1 German Shepherd',
    rating: 5,
  },
  {
    name: 'Mark B.',
    location: 'St Helens',
    text: 'Quick, efficient, and friendly. They turn up when they say they will, do a thorough job, and you\'d never know they\'d been — except the garden is immaculate. Highly recommend.',
    dogs: '3 Dogs',
    rating: 5,
  },
  {
    name: 'Emma K.',
    location: 'Birkenhead',
    text: 'I\'d been putting off dealing with the garden for months. Scoop & Go did a deep clean and now come weekly. It\'s such a weight off my mind. Worth every penny.',
    dogs: '1 Cocker Spaniel',
    rating: 5,
  },
  {
    name: 'Tony R.',
    location: 'Ellesmere Port',
    text: 'Great service for our pub beer garden. Customers love the outdoor area now and we don\'t have to worry about complaints. Professional and reliable team.',
    dogs: 'Business Customer',
    rating: 5,
  },
]

const vp = { once: true, amount: 0 }

export default function Testimonials() {
  const [page, setPage] = useState(0)
  const perPage = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3
  const totalPages = Math.ceil(testimonials.length / perPage)

  const visible = testimonials.slice(page * perPage, page * perPage + perPage)

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-b from-cream to-warm-white py-16 lg:py-20"
    >
      <div className="blob-shape absolute -top-10 right-10 h-48 w-48 bg-earth-light/10" />
      <div className="blob-shape-2 absolute bottom-20 -left-10 h-40 w-40 bg-sage-light/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-earth-light/30 px-5 py-2 font-heading text-sm font-semibold text-bark">
            Happy Customers
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal-light">
            Don't just take our word for it — hear from the families and
            businesses we help across Merseyside and Cheshire.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {visible.map((t, i) => (
            <motion.div
              key={t.name + page}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="rounded-3xl bg-white/80 p-8 shadow-sm backdrop-blur-sm"
            >
              <div className="flex gap-1 text-earth">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <HiStar key={si} className="text-xl" />
                ))}
              </div>

              <p className="mt-4 leading-relaxed text-charcoal-light italic">
                "{t.text}"
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-light/30 font-heading font-bold text-forest">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-bold text-charcoal">{t.name}</p>
                  <p className="text-sm text-charcoal-light">
                    {t.location} · {t.dogs}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="rounded-full bg-white p-2 shadow-md transition-colors hover:bg-cream disabled:opacity-40"
              aria-label="Previous testimonials"
            >
              <HiChevronLeft className="text-xl text-forest" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, pi) => (
                <button
                  key={pi}
                  onClick={() => setPage(pi)}
                  className={`h-2.5 rounded-full transition-all ${
                    pi === page ? 'w-8 bg-forest' : 'w-2.5 bg-sage-light/50'
                  }`}
                  aria-label={`Go to page ${pi + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="rounded-full bg-white p-2 shadow-md transition-colors hover:bg-cream disabled:opacity-40"
              aria-label="Next testimonials"
            >
              <HiChevronRight className="text-xl text-forest" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
