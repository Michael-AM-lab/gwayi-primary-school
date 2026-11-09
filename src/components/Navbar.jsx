import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import schoolCrest from '../assets/Gwayi Valley Primary School White.png'

const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Academics', href: '/academics' },
  { label: 'Sports/Extracuriculars', href: '/sports' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Donations', href: '/donations' },
]

function Navbar() {
  const { pathname } = useLocation()
  const isContactPage = pathname === '/contact'
  const isLightNavbarPage = ['/academics', '/sports', '/admissions', '/donations'].includes(pathname)
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 24)
  const useLightNavbar = isContactPage || isLightNavbarPage || isScrolled

  useEffect(() => {
    function updateScrollState() {
      setIsScrolled(window.scrollY > 24)
    }

    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  return (
    <>
      {isContactPage && (
        <div
          className={`fixed inset-x-0 top-0 z-50 flex min-h-10 flex-col items-center justify-center gap-x-5 gap-y-1 bg-sky-600 px-4 py-2 text-xs font-medium text-white transition-transform duration-300 ease-in-out sm:flex-row sm:justify-end sm:px-8 sm:text-sm md:px-10 ${
            isScrolled ? '-translate-y-full' : 'translate-y-0'
          }`}
        >
          <a className="transition-colors hover:text-sky-200" href="mailto:Gwayiprimary@gmail.com">
            Gwayiprimary@gmail.com
          </a>
          <a className="transition-colors hover:text-sky-200" href="tel:+2631234567890">
            +263 123 456 7890
          </a>
        </div>
      )}
      <header
        className={`fixed inset-x-0 z-50 grid grid-cols-1 items-center gap-2 px-3 py-[13px] transition-[top,background-color,border-color,box-shadow] duration-300 ease-in-out sm:gap-3 sm:px-5 md:grid-cols-[1fr_auto_1fr] md:gap-4 md:px-10 md:py-[13px] ${
          isContactPage
            ? `${isScrolled ? 'top-0' : 'top-14 sm:top-10'} border-b border-sky-100 bg-white shadow-sm`
            : `top-0 ${useLightNavbar ? 'border-b border-sky-100 bg-white shadow-sm' : 'bg-transparent'}`
        }`}
      >
      <Link
        className={`inline-flex items-center justify-self-center gap-2 no-underline transition-colors md:relative md:z-10 md:gap-3 md:justify-self-start ${
          useLightNavbar ? 'text-sky-950' : 'text-white'
        }`}
        to="/"
        aria-label="Gwayi Primary School home"
      >
        <img
          className="size-10 rounded-lg object-contain sm:size-12 "
          src={schoolCrest}
          alt=""
          aria-hidden="true"
        />
      </Link>

      <nav
        className={`flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 justify-self-center rounded-xl border px-2 py-2 backdrop-blur-md transition-colors duration-200 sm:gap-x-6 sm:px-4 md:absolute md:inset-0 md:z-0 md:w-full md:flex-nowrap md:gap-x-7 md:rounded-none md:border-x-0 md:px-10 md:py-2 ${
          useLightNavbar ? 'border-sky-100 bg-white/95' : 'border-white/40 bg-white/10'
        }`}
        aria-label="Main navigation"
      >
        {navigationLinks.map((link) => (
          <Link
            className={`whitespace-nowrap text-xs font-medium transition-colors sm:text-sm ${
              useLightNavbar
                ? 'text-sky-950 hover:text-sky-700 focus-visible:text-sky-700'
                : 'text-white hover:text-sky-200 focus-visible:text-sky-200'
            }`}
            key={link.label}
            to={link.href}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <Link
        className="absolute right-3 top-3 z-10 rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-sky-700 focus-visible:bg-sky-700 sm:right-5 sm:top-4 sm:px-4 sm:text-sm md:right-10 md:top-1/2 md:-translate-y-1/2"
        to="/admissions"
      >
        Apply
      </Link>
      </header>
    </>
  )
}

export default Navbar