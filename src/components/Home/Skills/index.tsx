import { SectionContainer } from '@/components/commons/SectionContainer'
import { SectionTitle } from '@/components/commons/SectionTitle'
import { SkillChip } from '@/components/commons/SkillChip'
import { HomeSection } from '@/pages'

interface SkillArea {
  title: string
  items: string[]
}

interface SkillGroup {
  title: string
  skillAreas: SkillArea[]
}

const skillGroups: SkillGroup[] = [
  {
    title: 'I have worked with:',
    skillAreas: [
      { title: 'Languages', items: ['JavaScript', 'TypeScript'] },
      { title: 'Frameworks/UI Libs', items: ['ReactJS', 'Next.js'] },
      { title: 'State Management', items: ['Redux', 'Mobx'] },
      {
        title: 'Styles',
        items: [
          'CSS3',
          'Sass',
          'Styled-Components',
          'Material UI',
          'Stitches',
          'Radix'
        ]
      },
      {
        title: 'Bundlers/Transpilers',
        items: ['Webpack', 'Babel', 'Rollup']
      },
      {
        title: 'Tests',
        items: ['Jest', 'Testing Library', 'Cypress']
      },
      {
        title: 'Linter/Code Formatter',
        items: ['ESLint', 'Prettier']
      },
      { title: 'VCSs', items: ['Git'] },
      { title: 'Git Hooks', items: ['Husky'] },
      { title: 'Automation', items: ['Github Actions'] },
      {
        title: 'Other',
        items: ['Agile', 'Scrum', 'Clean Code', 'Extreme Programming']
      }
    ]
  },
  {
    title: 'I have studied and made projects with:',
    skillAreas: [
      {
        title: 'Languages/Runtimes',
        items: ['Node.js', 'Python', 'Ruby', 'C', 'VBA']
      },
      {
        title: 'Front-end Frameworks/Libs',
        items: ['Vue.js', 'Nuxt.js', 'Svelte', 'SvelteKit', 'Remix', 'Angular']
      },
      { title: 'Mobile Frameworks', items: ['React Native'] },
      {
        title: 'Back-end Frameworks',
        items: ['Express.js', 'Django', 'Django REST', 'Ruby on Rails']
      },
      { title: 'Styles', items: ['TailwindCSS', 'Bootstrap'] },
      { title: 'Observability', items: ['Elastic APM'] },
      {
        title: 'Databases/ODM/ORM',
        items: ['PostgreSQL', 'MongoDB', 'Mongoose', 'MySQL', 'Sequelize']
      },
      { title: 'WebSocket', items: ['Socket.IO'] },
      { title: 'Deploy', items: ['Heroku', 'AWS', 'GCP', 'Vercel'] },
      { title: 'Automation', items: ['Jenkins'] },
      { title: 'Other', items: ['PWA', 'Docker', 'Kubernetes', 'Rancher'] }
    ]
  }
]

export const Skills = () => {
  return (
    <section className="pt-20 lg:pt-28" id={'skills' as HomeSection}>
      <SectionContainer>
        <SectionTitle title="Skills" />
        <div className="mt-5 flex flex-col gap-10 lg:flex-row lg:justify-around">
          {skillGroups.map((skillGroup) => (
            <div key={skillGroup.title} className="flex-1">
              <h3 className="text-white text-lg font-semibold">
                ● {skillGroup.title}
              </h3>
              <ul className="mt-2 ml-4">
                {skillGroup.skillAreas.map((skill) => (
                  <li
                    key={skill.title}
                    className="mt-2 flex gap-2 items-center flex-wrap"
                  >
                    {skill.title && (
                      <span className="text-white text-sm underline underline-offset-2">
                        {skill.title}:
                      </span>
                    )}
                    {skill.items.map((item) => (
                      <SkillChip key={item} name={item} />
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}
