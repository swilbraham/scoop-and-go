import { HiPhone, HiMail, HiLocationMarker, HiGlobe } from 'react-icons/hi'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Why Choose Us', href: '#benefits' },
  { label: 'How It Works', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'About Us', href: '#about' },
  { label: 'Get a Quote', href: '#quote' },
]

const areas = [
  'Liverpool',
  'Birkenhead',
  'Prenton',
  'Wallasey',
  'Chester',
  'Ellesmere Port',
  'St Helens',
  'Warrington',
  'Widnes',
  'Southport',
  'Bootle',
  'Crosby',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🐾</span>
              <span className="font-heading text-xl font-bold text-white">
                Scoop & Go
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Professional dog waste removal for domestic and business customers
              across Merseyside & Cheshire. Keeping your garden clean, safe,
              and enjoyable.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.facebook.com/Scoopandgonw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-sage/30 hover:text-sage-light"
                aria-label="Follow us on Facebook"
              >
                <FaFacebook className="text-lg" />
              </a>
              <a
                href="https://www.instagram.com/Scoopandgonw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-sage/30 hover:text-sage-light"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-sage-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Areas We Cover
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {areas.map((area) => (
                <li key={area} className="text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h4>
            <div className="mt-4 space-y-4">
              <a
                href="tel:03300430508"
                className="flex items-center gap-3 text-sm transition-colors hover:text-sage-light"
              >
                <HiPhone className="text-lg text-sage-light" />
                0330 043 0508
              </a>
              <a
                href="mailto:hello@scoopandgo.uk"
                className="flex items-center gap-3 text-sm transition-colors hover:text-sage-light"
              >
                <HiMail className="text-lg text-sage-light" />
                hello@scoopandgo.uk
              </a>
              <a
                href="https://www.scoopandgo.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors hover:text-sage-light"
              >
                <HiGlobe className="text-lg text-sage-light" />
                www.scoopandgo.uk
              </a>
              <div className="flex items-center gap-3 text-sm">
                <HiLocationMarker className="text-lg text-sage-light" />
                Merseyside & Cheshire
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm">
          <p>&copy; {year} Scoop & Go. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
