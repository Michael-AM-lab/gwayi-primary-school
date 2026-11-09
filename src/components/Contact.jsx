import { useState } from 'react'
import schoolCrest from '../assets/Gwayi Valley Primary School Badge.png'

function Contact() {
  const [formStatus, setFormStatus] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setFormStatus('Message delivery is not connected yet. Please contact the school office directly.')
  }

  return (
    <section id="contact-page" className="bg-white" aria-labelledby="contact-title">
      <div className="relative flex min-h-[360px] w-full items-center justify-center overflow-hidden bg-sky-600 px-5 py-12 text-center sm:min-h-[400px] sm:px-8">
        <img
          className="pointer-events-none absolute right-4 top-1/2 h-[85%] max-w-[42%] -translate-y-1/2 object-contain opacity-[0.12] sm:right-8 lg:right-12"
          src={schoolCrest}
          alt=""
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl">
         
          <h1
            id="contact-title"
            className="mt-2 px-4 font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
          >
            Contact Us
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-6 text-sky-100 sm:text-base sm:leading-7">
            Get in touch with us. We are here to support our learners, families, and community.
          </p>
        </div>
      </div>
      <div className="bg-slate-50 px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
         

          <div className="grid overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm md:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-sky-600 px-6 py-8 text-white sm:px-10 sm:py-10 lg:px-12">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white-50">
                Contact Gwayi Valley Primary School
              </p>
              <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
                Let us build a bright future for children.
              </h3>
              <p className="mt-4 max-w-md text-base leading-7 text-white-100/85">
                Have a question about our school or admissions? Send us a message and the school
                office will be glad to help.
              </p>
              
              <div className="mt-8 rounded-xl border border-sky-700 bg-sky-900/60 p-4">
                <p className="text-sm font-semibold text-white">School office</p>
                <p className="mt-1 text-sm leading-6 text-white-100/80">
                  For school and admissions enquiries, please contact the school office.
                </p>
              </div>
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

            

            <form
              className="space-y-5 px-6 py-8 sm:px-10 sm:py-10 lg:px-12"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="mb-2 block text-sm font-semibold text-sky-950" htmlFor="contact-name">
                  Your name
                </label>
                <input
                  className="min-h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-sky-950" htmlFor="contact-email">
                  Your email
                </label>
                <input
                  className="min-h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-sky-950" htmlFor="contact-message">
                  Your message
                </label>
                <textarea
                  className="min-h-36 w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
                  id="contact-message"
                  name="message"
                  placeholder="How can we help?"
                  required
                />
              </div>
              <button
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-sky-600 px-6 text-base font-semibold text-white transition-colors hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                type="submit"
              >
                Send message
              </button>
              <p className="text-sm text-slate-600" aria-live="polite">
                {formStatus}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
