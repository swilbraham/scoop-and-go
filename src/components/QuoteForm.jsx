import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi'

const vp = { once: true, amount: 0 }

export default function QuoteForm() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const formData = new FormData(formRef.current)
      const res = await fetch('https://formsubmit.co/ajax/hello@scoopandgo.uk', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData,
      })
      if (res.ok) {
        setStatus('sent')
        formRef.current.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="quote"
      className="relative overflow-hidden bg-gradient-to-b from-cream to-cream-dark py-16 lg:py-20"
    >
      <div className="blob-shape absolute -top-16 -right-16 h-72 w-72 bg-sage-light/10" />
      <div className="blob-shape-2 absolute bottom-10 -left-10 h-56 w-56 bg-earth-light/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-sage-light/30 px-5 py-2 font-heading text-sm font-semibold text-forest">
            Free Quote
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
            Request Your Free Quote
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal-light">
            Fill in the form below and we'll get back to you with a no-obligation
            quote. Or give us a call — we're always happy to chat.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8 lg:col-span-2"
          >
            <div>
              <h3 className="font-heading text-xl font-bold text-charcoal">
                Get in Touch
              </h3>
              <p className="mt-2 text-charcoal-light">
                Prefer to talk? Give us a ring and we'll be happy to give you a
                quote over the phone.
              </p>
            </div>

            <a
              href="tel:03300430508"
              className="flex items-center gap-4 rounded-2xl bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest">
                <HiPhone className="text-xl" />
              </div>
              <div>
                <p className="font-heading text-sm font-semibold text-charcoal-light">
                  Call Us
                </p>
                <p className="font-heading text-lg font-bold text-forest">
                  0330 043 0508
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl bg-white/70 p-5 shadow-sm backdrop-blur-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest">
                <HiMail className="text-xl" />
              </div>
              <div>
                <p className="font-heading text-sm font-semibold text-charcoal-light">
                  Email Us
                </p>
                <p className="font-heading font-bold text-forest">
                  hello@scoopandgo.uk
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white/70 p-5 shadow-sm backdrop-blur-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest">
                <HiLocationMarker className="text-xl" />
              </div>
              <div>
                <p className="font-heading text-sm font-semibold text-charcoal-light">
                  Serving
                </p>
                <p className="font-heading font-bold text-forest">
                  Merseyside & Cheshire
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white/80 p-8 shadow-lg backdrop-blur-sm lg:p-10"
            >
              {/* Formsubmit.co settings */}
              <input type="hidden" name="_subject" value="New Quote Request from Scoop & Go Website" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-heading text-sm font-semibold text-charcoal"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="Name"
                    required
                    className="w-full rounded-xl border border-sage-light/30 bg-cream/30 px-4 py-3 text-charcoal outline-none transition-all focus:border-sage focus:ring-2 focus:ring-sage-light/30"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-heading text-sm font-semibold text-charcoal"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="Email"
                    required
                    className="w-full rounded-xl border border-sage-light/30 bg-cream/30 px-4 py-3 text-charcoal outline-none transition-all focus:border-sage focus:ring-2 focus:ring-sage-light/30"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block font-heading text-sm font-semibold text-charcoal"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="Phone"
                    className="w-full rounded-xl border border-sage-light/30 bg-cream/30 px-4 py-3 text-charcoal outline-none transition-all focus:border-sage focus:ring-2 focus:ring-sage-light/30"
                    placeholder="07xxx xxxxxx"
                  />
                </div>

                <div>
                  <label
                    htmlFor="postcode"
                    className="mb-2 block font-heading text-sm font-semibold text-charcoal"
                  >
                    Postcode / Area *
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    name="Postcode"
                    required
                    className="w-full rounded-xl border border-sage-light/30 bg-cream/30 px-4 py-3 text-charcoal outline-none transition-all focus:border-sage focus:ring-2 focus:ring-sage-light/30"
                    placeholder="CH43 or area name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="dogs"
                    className="mb-2 block font-heading text-sm font-semibold text-charcoal"
                  >
                    Number of Dogs
                  </label>
                  <select
                    id="dogs"
                    name="Number of Dogs"
                    className="w-full rounded-xl border border-sage-light/30 bg-cream/30 px-4 py-3 text-charcoal outline-none transition-all focus:border-sage focus:ring-2 focus:ring-sage-light/30"
                  >
                    <option value="1">1 dog</option>
                    <option value="2">2 dogs</option>
                    <option value="3">3 dogs</option>
                    <option value="4+">4 or more dogs</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="frequency"
                    className="mb-2 block font-heading text-sm font-semibold text-charcoal"
                  >
                    Service Frequency
                  </label>
                  <select
                    id="frequency"
                    name="Frequency"
                    className="w-full rounded-xl border border-sage-light/30 bg-cream/30 px-4 py-3 text-charcoal outline-none transition-all focus:border-sage focus:ring-2 focus:ring-sage-light/30"
                  >
                    <option value="weekly">Weekly</option>
                    <option value="fortnightly">Fortnightly</option>
                    <option value="one-off">One-off Deep Clean</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="mb-2 block font-heading text-sm font-semibold text-charcoal"
                >
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="Message"
                  rows={4}
                  className="w-full rounded-xl border border-sage-light/30 bg-cream/30 px-4 py-3 text-charcoal outline-none transition-all focus:border-sage focus:ring-2 focus:ring-sage-light/30 resize-none"
                  placeholder="Tell us about your garden, any specific requirements, etc."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-6 w-full rounded-full bg-forest px-8 py-4 font-heading text-lg font-bold text-white shadow-xl shadow-forest/25 transition-all hover:bg-sage-dark hover:shadow-2xl disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending'
                  ? 'Sending...'
                  : status === 'sent'
                  ? 'Quote Request Sent!'
                  : 'Send Quote Request'}
              </button>

              {status === 'sent' && (
                <p className="mt-4 text-center font-heading text-sm font-semibold text-sage-dark">
                  Thank you! We'll be in touch shortly with your quote.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-4 text-center font-heading text-sm font-semibold text-red-500">
                  Something went wrong. Please call us on 0330 043 0508 instead.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
