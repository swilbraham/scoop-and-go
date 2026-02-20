import { motion } from 'framer-motion'

const dogs = [
  {
    src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop&crop=faces',
    alt: 'Happy golden retriever in a garden',
    caption: 'Clean gardens, happy pups!',
  },
  {
    src: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=400&h=400&fit=crop&crop=faces',
    alt: 'Cute puppy playing on grass',
    caption: 'Safe space to play',
  },
  {
    src: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=400&h=400&fit=crop&crop=faces',
    alt: 'Dog enjoying a sunny garden',
    caption: 'Garden days are the best days',
  },
  {
    src: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400&h=400&fit=crop&crop=faces',
    alt: 'Playful dog running in the garden',
    caption: 'Room to roam freely',
  },
]

const vp = { once: true, amount: 0 }

export default function DogGallery() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-warm-white to-cream py-14 lg:py-18">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-sage-light/30 px-5 py-2 font-heading text-sm font-semibold text-forest">
            Happy Dogs, Clean Gardens
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-charcoal sm:text-4xl">
            Because They Deserve the Best
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {dogs.map((dog, i) => (
            <motion.div
              key={dog.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={vp}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <img
                src={dog.src}
                alt={dog.alt}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-64 lg:h-72"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="font-heading text-sm font-semibold text-white">
                  {dog.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
