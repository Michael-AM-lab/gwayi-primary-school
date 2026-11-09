
import { useEffect, useState } from 'react'

const heroImages = ['/hero1.png', '/hero2.png', '/hero.png']

function Home() {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (reducedMotion.matches) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveImage((currentImage) => (currentImage + 1) % heroImages.length)
    }, 7000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <div className="mx-auto w-full max-w-[1400px] border border-[#2b4053] bg-[#edf1f4]">
      <section
        className="relative grid min-h-[100svh] place-items-center overflow-hidden bg-sky-950 px-5 py-8 text-center sm:px-8 sm:py-10"
        id="home"
        aria-labelledby="welcome-title"
      >
        {heroImages.map((image, index) => (
          <img
            className={`absolute inset-0 size-full object-cover animate-hero-zoom transition-opacity duration-[2500ms] ease-in-out ${
              activeImage === index ? 'opacity-100' : 'opacity-0'
            }`}
            src={image}
            alt=""
            aria-hidden="true"
            key={image}
          />
        ))}
        <div className="absolute inset-0 bg-sky-950/55" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-3xl">
          
          <h1 id="welcome-title" className="text-[clamp(2.2rem,6vw,5rem)] font-extrabold tracking-tight text-white">
            Welcome to Gwayi Primary School
          </h1>
          
          <p className="mt-3 text-base text-white/90 sm:mt-5 sm:text-xl">
            Ever, Onward.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3 sm:mt-8 sm:gap-4">
            <a
              className="inline-flex min-h-10 items-center justify-center rounded-xl bg-sky-600 px-5 text-sm font-semibold text-white shadow-lg shadow-slate-900/25 transition-colors hover:bg-sky-700 sm:min-h-12 sm:px-6 sm:text-base"
              href="#about"
            >
              Learn more
            </a>
            <a
              className="inline-flex min-h-10 items-center justify-center rounded-xl border border-white/80 bg-white/5 px-5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:min-h-12 sm:px-6 sm:text-base"
              href="#donate"
            >
              Donate
            </a>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="flex min-h-[80svh] items-center border-t border-sky-100 bg-white px-5 py-14 sm:px-8 lg:px-12"
        aria-labelledby="home-about-title"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <h2
              id="home-about-title"
              className="mb-5 text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-tight tracking-tight text-sky-950"
            >
              Welcome to our school.
            </h2>
            <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Gwayi Primary School is a caring community where every child is encouraged to learn,
              grow in confidence, and build a bright future.
            </p>
            <a
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-lg border border-sky-700 bg-sky-600 px-6 text-base font-semibold text-white transition-colors hover:border-sky-800 hover:bg-sky-800"
              href="/about"
            >
              Why Us
            </a>
          </div>

          <div className="relative mx-auto h-[280px] w-full max-w-[560px] sm:h-[360px] lg:h-[410px]">
            <img
              className="absolute left-0 top-0 h-[78%] w-[76%] rounded-2xl border border-sky-200 object-cover shadow-xl shadow-sky-950/10"
              src="/hero2.png"
              alt="Gwayi Primary School pupils learning together"
            />
            <img
              className="absolute bottom-0 right-0 h-[62%] w-[58%] rounded-2xl border-4 border-white object-cover shadow-xl shadow-sky-950/15"
              src="/hero1.png"
              alt="Gwayi Primary School pupils celebrating together"
            />
          </div>
        </div>
      </section>

      <section id="admissions" className="flex min-h-[100svh] items-center border-y border-sky-100 bg-sky-50 px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-sky-700 sm:text-base">
            Your next chapter starts here
          </p>
          <h2 className="mb-8 text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-tight tracking-tight text-sky-950">
            2026 Admission
          </h2>

          <div className="grid items-start gap-8 md:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <img
              className="h-[240px] w-full rounded-2xl border border-sky-200 object-cover shadow-xl shadow-sky-950/10 sm:h-[320px] lg:h-[370px]"
              src="/hero.png"
              alt="Pupils taking part in a classroom lesson"
            />
            <div className="max-w-xl">
              <h3 className="mb-4 text-2xl font-bold leading-snug text-sky-950 sm:text-3xl">
                A bright start for every learner.
              </h3>
              <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Give your child a strong start. Join our welcoming school community for the 2026
                academic year.
              </p>
              <a
                className="mt-7 inline-flex min-h-12 items-center justify-center rounded-lg bg-sky-600 px-6 text-base font-semibold text-white shadow-md shadow-sky-900/15 transition-colors hover:bg-sky-800"
                href="/admissions"
              >
                Apply now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="academics" className="flex min-h-[100svh] items-center bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
        <div className="mx-auto w-full max-w-5xl rounded-2xl border border-sky-200 bg-sky-50/70 px-5 py-8 text-center shadow-sm shadow-sky-950/5 sm:px-12 sm:py-14">
          
          <h2 className="text-[clamp(2rem,5vw,3.8rem)] font-extrabold leading-tight tracking-tight text-sky-950">
            Academics at Gwayi
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            We build strong foundations through engaging lessons, dedicated teachers, and a
            supportive environment where every learner can thrive.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-3 text-left sm:mt-9 sm:gap-5 lg:grid-cols-3">
            {[
              { number: '01', title: 'Explore', description: 'Curiosity in every lesson.' },
              { number: '02', title: 'Grow', description: 'Confidence through discovery.' },
              { number: '03', title: 'Achieve', description: 'Progress with care and support.' },
            ].map((item) => (
              <article
                className="rounded-xl border border-sky-100 bg-white p-4 sm:p-6"
                key={item.number}
              >
                <span className="text-sm font-bold tracking-widest text-sky-600">{item.number}</span>
                <h3 className="mt-3 text-xl font-bold text-sky-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
          <a
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-lg bg-sky-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
            href="/academics"
          >
            Explore academics
          </a>
        </div>
      </section>

      <section
        id="vision"
        className="border-t border-sky-100 bg-white px-5 py-14 text-center sm:px-8 sm:py-16 lg:px-12 lg:py-20"
        aria-labelledby="vision-title"
      >
        <div className="mx-auto max-w-4xl">
          <h2
            id="vision-title"
            className="font-serif text-3xl font-bold text-sky-900 sm:text-4xl"
          >
            Our Vision
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            To nurture confident, curious, and capable learners who are prepared to contribute
            positively to their communities and shape a brighter future.
          </p>
        </div>
      </section>

      <section
        id="values"
        className="border-t border-sky-100 bg-[#f3f3f3] px-5 py-14 sm:px-8 lg:px-12 lg:py-20"
        aria-labelledby="values-title"
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="values-title"
            className="mb-10 text-center font-serif text-[clamp(2.4rem,4vw,4rem)] font-bold text-sky-900"
          >
            Our Values
          </h2>

          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1.1fr] lg:gap-12">
            <img
              className="h-[340px] w-full rounded-xl border border-sky-200 object-cover shadow-xl shadow-sky-950/10 sm:h-[420px]"
              src="/values.jpg"
              alt="Gwayi Primary School pupils together"
            />

            <ul className="space-y-5 text-left text-sky-900">
              {[
                'Vital, disciplined and persevering in body',
                'Curious, enthusiastic and fair in thinking',
                'Sensitive, helpful and respectful in relationships',
                'Humble, honest and wise in leadership',
                'Cheerful, confident and generous in spirit',
              ].map((value) => (
                <li key={value} className="flex items-start gap-3 text-[clamp(1.1rem,2vw,2rem)] leading-snug font-light tracking-tight">
                  <span className="mt-1 text-sky-700" aria-hidden="true">★</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home