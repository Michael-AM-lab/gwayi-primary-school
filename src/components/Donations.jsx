import schoolCrest from '../assets/Gwayi Valley Primary School Badge.png'

const donationSteps = [
  {
    number: '01',
    title: 'Get in touch',
    description: 'Tell the school office how you would like to support Gwayi Primary School.',
  },
  {
    number: '02',
    title: 'Discuss current needs',
    description: 'The office can share current priorities and suitable ways to contribute.',
  },
  {
    number: '03',
    title: 'Confirm the details',
    description: 'Verify arrangements directly with the school before making a donation.',
  },
]

function Donations() {
  return (
    <section className="bg-white" aria-labelledby="donations-title">
      <header className="relative flex min-h-[360px] w-full items-center justify-center overflow-hidden bg-sky-600 px-5 pb-10 pt-28 text-center sm:min-h-[400px] sm:px-8 sm:pt-24">
        <img
          className="pointer-events-none absolute right-4 top-1/2 h-[78%] max-w-[42%] -translate-y-1/2 object-contain opacity-[0.12] sm:right-8 lg:right-12"
          src={schoolCrest}
          alt=""
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl">
          <h1
            id="donations-title"
            className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Donations
          </h1>
          
          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-6 text-sky-100 sm:text-base sm:leading-7">
            Join us in supporting the learners and community of Gwayi Primary School.
          </p>
        </div>
      </header>

      <section
        className="flex min-h-[80svh] items-center border-t border-sky-100 bg-white px-5 py-14 sm:px-8 lg:px-12"
        aria-labelledby="support-school-title"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-16">
          <div className="relative mx-auto h-[280px] w-full max-w-[560px] sm:h-[360px] lg:h-[410px]">
            <img
              className="absolute left-0 top-0 h-[78%] w-[76%] rounded-2xl border border-sky-200 object-cover shadow-xl shadow-sky-950/10"
              src="/donations.jpg"
              alt="Pupils learning together at Gwayi Primary School"
            />
            <img
              className="absolute bottom-0 right-0 h-[62%] w-[58%] rounded-2xl border-4 border-white object-cover shadow-xl shadow-sky-950/15"
              src="/donations2.jpg"
              alt="Gwayi Primary School pupils taking part in school activities"
            />
          </div>

          <div>
           
            <h2
              id="support-school-title"
              className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-sky-950 sm:text-4xl"
            >
              Help our learners thrive.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              The support of families, alumni, and the wider community makes a difference to school
              life. Contact us to learn about current priorities and ways you can contribute.
            </p>
            <a
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-lg bg-sky-600 px-6 text-base font-semibold text-white shadow-md shadow-sky-900/15 transition-colors hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
              href="/contact"
            >
              Talk to the school
            </a>
          </div>
        </div>
      </section>

      <section
        className="border-y border-sky-100 bg-sky-50 px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
        aria-labelledby="donation-steps-title"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700">
              How to contribute
            </p>
            <h2
              id="donation-steps-title"
              className="mt-3 text-3xl font-extrabold tracking-tight text-sky-950 sm:text-4xl"
            >
              Make your support count.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Our school office can help you find an appropriate way to contribute and provide
              verified instructions.
            </p>
          </div>

          <ol className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3">
            {donationSteps.map((step) => (
              <li
                className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm shadow-sky-950/5 sm:p-8"
                key={step.number}
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-sky-50 text-sm font-bold tracking-wider text-sky-700">
                  {step.number}
                </span>
                <h3 className="mt-5 text-xl font-bold text-sky-950">{step.title}</h3>
                <p className="mt-2 text-base leading-7 text-slate-600">{step.description}</p>
              </li>
            ))}
          </ol>

          <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-6 text-slate-500">
            For your security, confirm official donation and payment details with the school office
            before transferring funds.
          </p>
        </div>
      </section>
    </section>
  )
}

export default Donations