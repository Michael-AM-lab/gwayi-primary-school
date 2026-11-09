import schoolCrest from '../assets/Gwayi Valley Primary School Badge.png'

function Admision() {
  return (
    <section className="bg-white" aria-labelledby="admissions-title">
      <header className="relative flex min-h-[360px] w-full items-center justify-center overflow-hidden bg-sky-600 px-5 pb-10 pt-28 text-center sm:min-h-[400px] sm:px-8 sm:pt-24">
        <img
          className="pointer-events-none absolute right-4 top-1/2 h-[78%] max-w-[42%] -translate-y-1/2 object-contain opacity-[0.12] sm:right-8 lg:right-12"
          src={schoolCrest}
          alt=""
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl">
          <h1
            id="admissions-title"
            className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Admissions
          </h1>
          
          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-6 text-sky-100 sm:text-base sm:leading-7">
            Begin your child’s learning journey with the Gwayi Primary School community.
          </p>
        </div>
      </header>

      <section
        className="flex min-h-[80svh] items-center border-t border-sky-100 bg-white px-5 py-14 sm:px-8 lg:px-12"
        aria-labelledby="admissions-process-title"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-14 lg:gap-16">
          <img
            className="h-[320px] w-full rounded-2xl border border-sky-200 object-cover shadow-xl shadow-sky-950/10 sm:h-[400px] lg:h-[460px]"
            src="/hero2.png"
            alt="Pupils learning together at Gwayi Primary School"
          />

          <div>
           
            
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              We’re happy to help your family learn more about joining Gwayi Primary School. Start
              by contacting the school office, and they’ll guide you through the next steps.
            </p>

            <ol className="mt-7 space-y-3">
              {[
                {
                  number: '01',
                  title: 'Get in touch',
                  description: 'Contact the school office with your admissions questions.',
                },
                {
                  number: '02',
                  title: 'Talk through your needs',
                  description: 'Ask about availability, requirements, and important dates.',
                },
                {
                  number: '03',
                  title: 'Follow the next steps',
                  description: 'The school office will explain how to continue your enquiry.',
                },
              ].map((step) => (
                <li
                  className="flex items-start gap-4 rounded-xl border border-sky-100 bg-sky-50/70 p-4 sm:p-5"
                  key={step.number}
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold tracking-wider text-sky-700 shadow-sm">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-bold text-sky-950">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <a
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-lg bg-sky-600 px-6 text-base font-semibold text-white shadow-md shadow-sky-900/15 transition-colors hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
              href="/contact"
            >
              Contact the school
            </a>
          </div>
        </div>
      </section>

      <section
        className="border-y border-sky-100 bg-sky-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
        aria-labelledby="admissions-fees-title"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            
            <h2
              id="admissions-fees-title"
              className="mt-3 font-serif text-3xl font-bold text-sky-950 sm:text-4xl"
            >
              Fees &amp; Payment
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              For the latest fees and approved payment options, please contact the school office.
              They can provide current details and answer any questions.
            </p>
          </div>

          <h3 className="mt-10 text-center text-xl font-bold text-sky-950 sm:mt-12 sm:text-2xl">
            Get the right information
          </h3>
          <div className="mt-6 grid gap-5 md:grid-cols-2 md:gap-6">
            <article className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm shadow-sky-950/5 sm:p-8">
              <span className="text-sm font-bold uppercase tracking-[0.14em] text-sky-700">
                School fees
              </span>
              <h4 className="mt-3 text-xl font-bold text-sky-950">Current fee schedule</h4>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Request the latest fee schedule directly from the school office, including any
                applicable dates and payment arrangements.
              </p>
            </article>
            <article className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm shadow-sky-950/5 sm:p-8">
              <span className="text-sm font-bold uppercase tracking-[0.14em] text-sky-700">
                Payment
              </span>
              <h4 className="mt-3 text-xl font-bold text-sky-950">Verified payment details</h4>
              <p className="mt-3 text-base leading-7 text-slate-600">
                For your security, confirm the school’s official payment details with the office
                before making a payment.
              </p>
            </article>
          </div>

          <div className="mt-8 text-center">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-sky-600 px-6 text-base font-semibold text-white shadow-md shadow-sky-900/15 transition-colors hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
              href="/contact"
            >
              Contact the school office
            </a>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Admision