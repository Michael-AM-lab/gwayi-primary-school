import schoolCrest from '../assets/Gwayi Valley Primary School Badge.png'

const sportsOffered = [
  { name: 'Volleyball', image: '/volleyball.jpg' },
  { name: 'Soccer', image: '/soccer.jpg' },
  { name: 'Netball', image: '/Netball.jpg' },
  { name: 'Athletics', image: '/athletics.jpg' },
]

function Sports() {
  return (
    <section className="bg-white" aria-labelledby="sports-title">
      <header className="relative flex min-h-[360px] w-full items-center justify-center overflow-hidden bg-sky-600 px-5 pb-10 pt-28 text-center sm:min-h-[400px] sm:px-8 sm:pt-24">
        <img
          className="pointer-events-none absolute right-4 top-1/2 h-[78%] max-w-[42%] -translate-y-1/2 object-contain opacity-[0.12] sm:right-8 lg:right-12"
          src={schoolCrest}
          alt=""
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl">
          <h1
            id="sports-title"
            className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Sports/Extracurriculars
          </h1>
          
          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-6 text-sky-100 sm:text-base sm:leading-7">
            Building teamwork, confidence, and school spirit through active participation.
          </p>
        </div>
      </header>

      <section
        className="flex min-h-40 items-center justify-center border-y border-sky-100 bg-sky-50 px-5 py-10 text-center sm:min-h-48 sm:px-8 sm:py-12"
        aria-labelledby="sports-intro-title"
      >
        <h2
          id="sports-intro-title"
          className="mx-auto max-w-4xl font-serif text-xl font-semibold leading-relaxed text-sky-950 sm:text-2xl sm:leading-relaxed lg:text-3xl"
        >
          Sport helps our learners build confidence, teamwork, and a healthy sense of school spirit.
        </h2>
      </section>

      <section
        className="border-b border-sky-100 bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
        aria-label="The value of sport"
      >
        <div className="mx-auto max-w-6xl space-y-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          <p>
            Taking part in sport gives learners the chance to stay active, practise cooperation,
            and encourage one another. Each activity can help children develop confidence, respect,
            and a sense of belonging within the school community.
          </p>
          <p>
            Whether learning a new skill or playing as part of a team, learners can discover the
            value of effort, perseverance, and fair play. We encourage families to contact the
            school for information about current sports and extracurricular opportunities.
          </p>
        </div>
      </section>

      <section
        className="border-b border-sky-100 bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
        aria-labelledby="sports-offered-title"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            
            <h2
              id="sports-offered-title"
              className="mt-3 font-serif text-3xl font-bold text-sky-950 sm:text-4xl"
            >
              Sports we offer
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Explore the activities our learners can get involved in.
            </p>
          </div>

          <div className="mt-8 overflow-hidden border border-sky-200 bg-sky-100 lg:mt-10">
            <ul className="grid gap-4 bg-sky-50 p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-4 lg:gap-6 lg:p-8">
              {sportsOffered.map((sport) => (
                <li className="min-w-0" key={sport.name}>
                  <img
                    className="aspect-[4/3] w-full border border-sky-200 object-cover shadow-sm"
                    src={sport.image}
                    alt={`Temporary school photo for ${sport.name}; replace with a sport-specific photo`}
                  />
                  <h3 className="mt-3 text-center text-base font-bold text-sky-950">
                    {sport.name}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Sports