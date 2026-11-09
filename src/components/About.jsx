import { useRef, useState } from 'react'
import schoolCrest from '../assets/Gwayi Valley Primary School Badge.png'

const aboutHeroImage = '/hero2.png'

const schoolFacts = [
  { title: 'Motto', description: 'Ever, Onward.' },
  { title: 'Type', description: 'Primary School' },
  { title: 'Grades', description: 'Grades 1 to 7' },
  {
    title: 'Legacy',
    description: 'Gwayi Primary School has been a pillar of education in the community for decades.',
  },
]

const schoolStats = [
  { value: '###', label: 'Students' },
  { value: '##+', label: 'Years of excellence' },
  { value: '##+', label: 'Teachers and staff' },
]

const galleryItems = [
  { title: 'School life', src: '/hero.png', alt: 'School community at Gwayi Primary School' },
  { title: 'Learning', src: '/hero2.png', alt: 'Pupils taking part in a classroom lesson' },
  { title: 'Sports', src: '/volleyball.jpg', alt: 'Gwayi Primary School pupils together' },
  { title: 'School activities', src: '/schoolact.jpg', alt: 'Pupils taking part in school activities' },
  {
    title: 'Our community',
    src: '/hero2.png',
    alt: 'Gwayi Primary School community',
  },
]

function About() {
  const [showMore, setShowMore] = useState(false)
  const galleryRef = useRef(null)

  function slideGallery(direction) {
    const gallery = galleryRef.current
    const firstCard = gallery?.firstElementChild

    if (!gallery || !firstCard) return

    const gap = Number.parseFloat(window.getComputedStyle(gallery).columnGap) || 0
    gallery.scrollBy({
      left: direction * (firstCard.getBoundingClientRect().width + gap),
      behavior: 'smooth',
    })
  }

  return (
    <section
      id="about"
      className="bg-white"
      aria-labelledby="about-title"
    >
      <div className="relative flex h-[340px] w-full items-center justify-center overflow-hidden bg-sky-950 sm:h-[400px] lg:h-[440px]">
        <img
          className="absolute inset-0 size-full object-cover"
          src={aboutHeroImage}
          alt=""
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-slate-950/65" aria-hidden="true" />
        <nav
          className="absolute left-5 top-24 z-10 text-left text-xs text-white sm:left-8 sm:top-24 sm:text-sm lg:left-12"
          aria-label="Breadcrumb"
        >
          
        </nav>
        <h2
          id="about-title"
          className="relative z-10 px-4 font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
        >
          About Us
        </h2>
      </div>
      <div className="relative overflow-hidden bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <img
          className="pointer-events-none absolute -left-2 top-4 w-72 opacity-10"
          src={schoolCrest}
          alt=""
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div>
            <p className="text-lg font-bold uppercase tracking-[0.16em] text-sky-700 sm:text-xl">
              About Gwayi Primary School
            </p>
            <h2 className="mt-7 max-w-xl text-3xl font-extrabold leading-tight text-sky-950 sm:text-4xl">
              A place to learn, grow, and look ahead.
            </h2>
          </div>

          <div className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            <p>
              Gwayi Primary School is a caring community where every child is encouraged to learn,
              grow in confidence, and build a bright future.
            </p>
            <p className="mt-5">
              We build strong foundations through engaging lessons, dedicated teachers, and a
              supportive environment where every learner can thrive.
            </p>
            {showMore && (
              <p className="mt-5">
                Our school aims to help each learner discover their strengths, take pride in their
                progress, and prepare for the opportunities ahead.
              </p>
            )}
            <button
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-sky-700 px-8 text-base font-semibold text-white transition-colors hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
              type="button"
              aria-expanded={showMore}
              onClick={() => setShowMore((isShowingMore) => !isShowingMore)}
            >
              {showMore ? 'Read less' : 'Read more'}
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-sky-100 bg-sky-50 px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {schoolFacts.map((fact) => (
            <article
              className="flex min-h-44 flex-col items-center justify-center rounded-xl border border-sky-100 bg-white px-5 py-7 text-center shadow-sm shadow-sky-950/5 sm:min-h-48"
              key={fact.title}
            >
              <h3 className="text-xl font-bold text-sky-950 sm:text-2xl">{fact.title}</h3>
              <p className="mt-5 max-w-xs text-sm leading-6 text-slate-600 sm:text-base">
                {fact.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold text-sky-950 sm:text-3xl">
            Beyond the Classroom at Gwayi
          </h2>
          <span className="mx-auto mt-5 block h-1 w-16 rounded-full bg-sky-600" aria-hidden="true" />
          <div className="mt-8 space-y-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            <p>
              Learning at Gwayi Primary School extends beyond lessons. Through sports, creative
              activities, and shared experiences, learners have opportunities to build confidence,
              teamwork, and a sense of belonging.
            </p>
            <p>
              We encourage every child to explore their interests, show respect for others, and
              carry the values of our school into the wider community.
            </p>
          </div>
        </div>
      </div>

      <section
        className="border-t border-sky-100 bg-sky-50 px-5 py-12 sm:px-8 sm:py-16 lg:px-12"
        aria-labelledby="gallery-title"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
             
              <h2 id="gallery-title" className="mt-2 text-2xl font-extrabold text-sky-950 sm:text-3xl">
                Life at our school
              </h2>
            </div>
            <div className="flex shrink-0 gap-2">
              <button
                className="grid size-10 place-items-center rounded-full border border-sky-200 bg-white text-sky-900 transition-colors hover:bg-sky-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                type="button"
                aria-label="Show previous photos"
                onClick={() => slideGallery(-1)}
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                className="grid size-10 place-items-center rounded-full border border-sky-200 bg-white text-sky-900 transition-colors hover:bg-sky-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                type="button"
                aria-label="Show next photos"
                onClick={() => slideGallery(1)}
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <div
            ref={galleryRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:thin] [scrollbar-color:#7dd3fc_transparent]"
            aria-label="School photo gallery"
          >
            {galleryItems.map((item) => (
              <article
                className="w-[82%] flex-none snap-start overflow-hidden rounded-xl border border-sky-200 bg-white shadow-sm sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-3rem)/4)]"
                key={item.title}
              >
                <img className="aspect-[4/3] w-full object-cover" src={item.src} alt={item.alt} />
                <h3 className="px-4 py-3 text-sm font-semibold text-sky-950">{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="relative overflow-hidden bg-sky-600 px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-12">
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(155deg, transparent 49.8%, #bae6fd 50%, transparent 50.2%), linear-gradient(25deg, transparent 49.8%, #bae6fd 50%, transparent 50.2%)',
            backgroundSize: '360px 240px',
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 text-center sm:grid-cols-3 sm:gap-6">
          {schoolStats.map((stat) => (
            <article key={stat.label}>
              <p className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                {stat.value}
              </p>
              <h3 className="mt-2 text-base font-semibold text-sky-100 sm:text-lg">
                {stat.label}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About