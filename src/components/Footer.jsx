import { Link } from 'react-router-dom'
import schoolCrest from '../assets/Gwayi Valley Primary School white.png'

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Sports/Extracurriculars', to: '/sports' },
 
]

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-sky-800 bg-sky-950 px-5 py-10 text-sky-100 sm:px-8 sm:py-12 lg:px-12"
    >
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-12">
        <div>
          <Link className="inline-flex items-center gap-3 text-white" to="/">
            <img
              className="size-12 rounded-lg object-contain"
              src={schoolCrest}
              alt=""
              aria-hidden="true"
            />
            <span className="text-lg font-bold">Gwayi Primary School</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-sky-100/80">
            Learning, growing, and looking ahead. Ever, Onward.
          </p>
          <div className="mt-5 flex items-center gap-3" aria-label="Social media">
            <span className="grid size-11 place-items-center rounded-full border border-sky-300/50 bg-sky-900/60 text-white" title="Instagram">
              <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
              </svg>
              <span className="sr-only">Instagram</span>
            </span>
            <span className="grid size-11 place-items-center rounded-full border border-sky-300/50 bg-sky-900/60 text-white" title="Facebook">
              <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </span>
            <span className="grid size-11 place-items-center rounded-full border border-sky-300/50 bg-sky-900/60 text-white" title="TikTok">
              <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
                <path d="M19.6 8.2a7.1 7.1 0 0 1-4.3-1.5v7.1a5.8 5.8 0 1 1-5-5.7v3.6a2.3 2.3 0 1 0 1.5 2.1V2.5h3.5c.2 2 1.4 3.8 3.3 4.5.3.1.7.2 1 .3v.9Z" />
              </svg>
              <span className="sr-only">TikTok</span>
            </span>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Explore</h2>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link
                  className="text-sm text-sky-100/80 transition-colors hover:text-white"
                  to={link.to}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Get in touch</h2>
          <p className="mt-4 text-sm leading-6 text-sky-100/80">
            For school and admissions enquiries, please contact the school office.
          </p>
          <div className=" space-x-4">
          <Link
            className="mt-4 inline-flex min-h-10 items-center justify-center rounded-lg bg-sky-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-sky-600"
            to="/admissions"
          >
            Admissions
          </Link>
          
          <Link
            className="mt-4 inline-flex min-h-10 items-center justify-center rounded-lg bg-sky-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-sky-600"
            to="/contact"
          >
            Contact
          </Link>

          <Link
            className="mt-4 inline-flex min-h-10 items-center justify-center rounded-lg bg-sky-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-sky-600"
            to="/donations"
          >
            Donate
          </Link>


          </div>

          
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-sky-800 pt-5 text-center text-xs text-sky-100/70 sm:text-left">
        © {currentYear} Gwayi Primary School. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer