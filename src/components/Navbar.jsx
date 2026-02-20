import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiPhone } from 'react-icons/hi'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Why Us', href: '#benefits' },
  { label: 'How It Works', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'About', href: '#about' },
  { label: 'Get a Quote', href: '#quote' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-sage/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="text-3xl">🐾</span>
            <div>
              <span className="font-heading text-xl font-bold text-forest lg:text-2xl">
                Scoop & Go
              </span>
              <span className="block text-[10px] font-medium tracking-wider text-sage-dark uppercase">
                Dog Waste Removal
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading text-sm font-semibold text-charcoal-light transition-colors hover:text-forest"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:07724564683"
              className="flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 font-heading text-sm font-bold text-white shadow-lg shadow-forest/20 transition-all hover:bg-sage-dark hover:shadow-xl hover:shadow-forest/30"
            >
              <HiPhone className="text-lg" />
              07724 564683
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-xl bg-cream p-2 text-forest lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-white/95 backdrop-blur-lg lg:hidden"
          >
            <div className="space-y-1 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-4 py-3 font-heading font-semibold text-charcoal transition-colors hover:bg-cream hover:text-forest"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="tel:07724564683"
                  className="flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3 font-heading font-bold text-white shadow-lg"
                >
                  <HiPhone className="text-lg" />
                  Call Us: 07724 564683
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
