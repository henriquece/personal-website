import { SectionContainer } from '@/components/commons/SectionContainer'
import { SectionTitle } from '@/components/commons/SectionTitle'
import { HomeSection } from '@/pages'

const experiences = [
  {
    position: 'Senior Front-end Engineer',
    company: 'Aarin Tech-fin',
    date: 'Sep 2023 - present',
    description: [
      'Development of financial products’ front-end, using ReactJS, Next.js, Typescript, Material UI, React Query and other libraries.'
    ]
  },
  {
    position: 'Senior Front-end Engineer',
    company: 'Seedz',
    date: 'Feb 2023 - Sep 2023',
    description: [
      'Research and development of the new front-end project for the company’s ERP product, including the tools, libraries and the architecture. The project is developed with ReactJS, Rollup, Stitches, Radix, Storybook and other libraries.'
    ]
  },
  {
    position: 'Front-end Coordinator',
    company: 'Mobiauto',
    date: 'Jun 2022 - Jan 2023',
    description: [
      'Coordination of front-end team and front-end projects.',
      'Coordination of recruitment process.',
      'Development of better technical practices, like automated tests and observability.'
    ]
  },
  {
    position: 'Front-end Developer',
    company: 'Mobiauto',
    date: 'Feb 2019 - May 2022',
    description: [
      'Development of server-side and client-side front-end projects, using ReactJS, Next.js, Typescript, Styled-Components, Material UI and other libraries, taking care of SEO, performance optimization, responsivity and compatibility.',
      'Research and development of Mobiauto Design System and the new projects architecture (monorepo), as well as all the tools and libraries used on it.'
    ]
  },
  {
    position: 'Front-end Developer',
    company: 'Agile Content',
    date: 'Sep 2018 - Jan 2019',
    description: [
      'Development of server-side front-end projects, using ReactJS, Styled-Components, Material UI, Redux and other libraries.'
    ]
  }
]

export const Experiences = () => {
  return (
    <section className="pt-20 lg:pt-28" id={'experiences' as HomeSection}>
      <SectionContainer>
        <SectionTitle title="Experiences" />
        <div className="mt-7 flex flex-col gap-6">
          {experiences.map((experience) => (
            <div
              key={experience.date}
              className={`p-2 flex flex-col rounded-lg bg-zinc-900 shadow-card md:flex-row`}
            >
              <div className="flex flex-col pt-2 px-2 pb-4">
                <div className="mb-2 md:flex md:items-end">
                  <h3 className="text-white text-xl font-semibold">
                    {experience.position}
                  </h3>
                  <span className="text-white hidden md:block md:mx-2">-</span>
                  <div className="text-white md:text-lg">
                    <span>{experience.company}</span> (
                    <span>{experience.date}</span>)
                  </div>
                </div>
                {experience.description.map((paragraph) => (
                  <div key={paragraph} className="mt-2 flex text-white text-sm">
                    <span>●</span>
                    <p className="font-light ml-1">{paragraph}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}
