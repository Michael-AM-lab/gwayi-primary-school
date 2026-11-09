import { useEffect, useState } from 'react'
import schoolCrest from '../assets/Gwayi Valley Primary School Badge.png'

const curriculumSubjects = ['Mathematics', 'English', 'Physical education', 'Science', 'Social Studies', 'Arts & Crafts', 'ICT', 'Music']

function Academics() {
  const [showFacultyNotice, setShowFacultyNotice] = useState(false)

  useEffect(() => {
    if (!showFacultyNotice) return undefined

    const timeoutId = window.setTimeout(() => setShowFacultyNotice(false), 3000)
    return () => window.clearTimeout(timeoutId)
  }, [showFacultyNotice])

  return (
    <section className="bg-white" aria-labelledby="academics-title">
      <header className="relative flex min-h-[360px] w-full items-center justify-center overflow-hidden bg-sky-600 px-5 pb-10 pt-28 text-center sm:min-h-[400px] sm:px-8 sm:pt-24">
        <img
          className="pointer-events-none absolute right-4 top-1/2 h-[78%] max-w-[42%] -translate-y-1/2 object-contain opacity-[0.12] sm:right-8 lg:right-12"
          src={schoolCrest}
          alt=""
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl">
         
          <h1
            id="academics-title"
            className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Academics
          </h1>
          
          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-6 text-sky-100 sm:text-base sm:leading-7">
            Strong foundations, curious minds, and learning that prepares every child for what
            comes next.
          </p>
        </div>
      </header>

      <section
        className="flex min-h-[80svh] items-center border-t border-sky-100 bg-white px-5 py-14 sm:px-8 lg:px-12"
        aria-labelledby="curriculum-title"
      >
        <div className="mx-auto grid w-full max-w-6xl items-stretch gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-14 lg:gap-16">
          <img
            className="h-[320px] w-full rounded-2xl border border-sky-200 object-cover shadow-xl shadow-sky-950/10 sm:h-[400px] md:h-full md:min-h-[460px]"
            src="/hero2.png"
            alt="Gwayi Primary School pupils learning together"
          />

          <div>
            
            <h2
              id="curriculum-title"
              className="text-3xl font-extrabold tracking-tight text-sky-950 sm:text-4xl"
            >
              Our Curriculum
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              We support learners to build knowledge, develop confidence, and grow through engaging
              lessons and dedicated teaching.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-3 md:grid-cols-1">
              {curriculumSubjects.map((subject) => (
                <li
                  className="flex min-h-12 items-center gap-3 rounded-xl border border-sky-100 bg-sky-50/70 px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:border-sky-200 hover:bg-sky-50 sm:text-sm md:text-base"
                  key={subject}
                >
                  <svg
                    className="size-5 shrink-0 text-sky-700"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
                    <path
                      d="m8 12 2.5 2.5L16 9"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                    />
                  </svg>
                  {subject}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-sky-100 bg-slate-50 px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl divide-y divide-sky-200 overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm shadow-sky-950/5 md:grid-cols-2 md:divide-x md:divide-y-0">
          <article className="px-6 py-8 sm:px-10 sm:py-10">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-700">Our teachers</p>
            <h2 className="mt-2 text-2xl font-bold text-sky-950">Our Faculty</h2>
            <p className="mt-3 max-w-lg text-base leading-7 text-slate-600">
              Our teachers guide and encourage learners throughout their school journey. Contact
              the school office for faculty information.
            </p>
            <button
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg border border-sky-700 px-5 text-sm font-semibold text-sky-800 transition-colors hover:bg-sky-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
              type="button"
              onClick={() => setShowFacultyNotice(true)}
            >
              Faculty information
            </button>
            {showFacultyNotice && (
              <p className="mt-3 text-sm font-medium text-sky-700" role="status" aria-live="polite">
                Faculty information is coming soon.
              </p>
            )}
          </article>

          <article className="px-6 py-8 sm:px-10 sm:py-10">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-700">School life</p>
            <h2 className="mt-2 text-2xl font-bold text-sky-950">Beyond the Classroom</h2>
            <p className="mt-3 max-w-lg text-base leading-7 text-slate-600">
              School activities give learners opportunities to build teamwork, confidence, and a
              strong sense of community.
            </p>
            <a
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-sky-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
              href="/sports"
              aria-label="Contact the school office about sports"
            >
              Learn about activities
            </a>
          </article>
        </div>
      </section>
    </section>
  )
}

export default Academics
