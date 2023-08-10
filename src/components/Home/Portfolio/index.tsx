import Image, { StaticImageData } from 'next/image'
import { SectionContainer } from '@/components/commons/SectionContainer'
import { SectionTitle } from '@/components/commons/SectionTitle'
import personalWebsiteImg from '../../../../public/project-personal-website.png'
import technewsVuejsImg from '../../../../public/project-technews-vuejs.png'
import technewsSvelteImg from '../../../../public/project-technews-svelte.png'
import technewsRemixImg from '../../../../public/project-technews-remix.png'
import technewsNextjsImg from '../../../../public/project-technews-nextjs.png'
import chatMobileImg from '../../../../public/project-chat-mobile.png'
import { SkillChip } from '@/components/commons/SkillChip'
import { Button } from '@/components/commons/Button'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { HomeSection } from '@/pages'
import { Fragment } from 'react'

interface Project {
  title: string
  description?: string
  skills: string[]
  image?: StaticImageData
  youtubeVideoId?: string
  href?: string
  githubHref: string
}

interface FieldProjects {
  title: string
  description?: string
  items: Project[]
}

const frontendProjects: FieldProjects = {
  title: 'Front-end',
  items: [
    {
      title: 'Chat',
      description:
        'A ReactJS chat app built from scratch (no boilerplate, like CRA) with Sign In (Home), Sign Up and Chat pages, which communicates with the Node.js Chat API below.',
      skills: [
        'ReactJS',
        'Typescript',
        'Webpack',
        'React Router',
        'Styled-Components',
        'Socket.IO',
        'Redux',
        'Jest',
        'Testing Library',
        'Cypress',
        'Github Actions'
      ],
      youtubeVideoId: 'qa7XDyFHm8U',
      href: 'https://henriquece-chat.vercel.app',
      githubHref: 'https://github.com/henriquece/chat'
    },
    {
      title: 'Personal Website',
      description:
        'A Next.js website, which shows my portfolio, skills and experiences.',
      skills: ['Next.js', 'Typescript', 'TailwindCSS'],
      image: personalWebsiteImg,
      githubHref: 'https://github.com/henriquece/personal-website'
    }
  ]
}

const frontendTechNewsProjects: FieldProjects = {
  title: 'Front-end - TechNews',
  description:
    'The same project implemented with various front-end frameworks/libs to study and compare them. All projects fetch articles from the HackerNews API.',
  items: [
    {
      title: 'TechNews - Vue.js',
      skills: ['Vue.js', 'Nuxt.js'],
      image: technewsVuejsImg,
      href: 'https://technews-vuejs.vercel.app',
      githubHref: 'https://github.com/henriquece/technews-vuejs'
    },
    {
      title: 'TechNews - Svelte',
      skills: ['Svelte', 'SvelteKit', 'Typescript'],
      image: technewsSvelteImg,
      href: 'https://technews-svelte.vercel.app',
      githubHref: 'https://github.com/henriquece/technews-svelte'
    },
    {
      title: 'TechNews - Remix',
      skills: ['Remix', 'ReactJS', 'Typescript'],
      image: technewsRemixImg,
      href: 'https://technews-remix.vercel.app',
      githubHref: 'https://github.com/henriquece/technews-remix'
    },
    {
      title: 'TechNews - Next.js',
      skills: ['Next.js (App Router)', 'ReactJS', 'Typescript'],
      image: technewsNextjsImg,
      href: 'https://technews-nextjs.vercel.app/',
      githubHref: 'https://github.com/henriquece/technews-nextjs'
    },
    {
      title: 'TechNews - Stencil',
      description: 'Web Components for the TechNews projects, using Stencil.',
      skills: ['Web Components', 'Stencil', 'Typescript'],
      githubHref: 'https://github.com/henriquece/technews-web-components'
    }
  ]
}

const otherProjects: FieldProjects = {
  title: 'Other',
  items: [
    {
      title: 'Chat API',
      description:
        'A Node.js/Express chat api that serves and communicates with the ReactJS frontend app Chat, providing user authentication.',
      skills: [
        'Javascript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'JWT',
        'Socket.IO'
      ],
      githubHref: 'https://github.com/henriquece/chat-api'
    },
    {
      title: 'Chat Mobile',
      description:
        'A React Native chat app, which communicates with the Node.js Chat API above.',
      skills: ['React Native', 'Expo', 'Typescript', 'Redux'],
      image: chatMobileImg,
      githubHref: 'https://github.com/henriquece/chat-mobile'
    }
  ]
}

const projectsGroups = [
  frontendProjects,
  frontendTechNewsProjects,
  otherProjects
]

export const Portfolio = () => {
  return (
    <section className="pt-20 md:pt-28" id={'portfolio' as HomeSection}>
      <SectionContainer>
        <SectionTitle title="Portfolio" />
        {projectsGroups.map((group) => (
          <Fragment key={group.title}>
            <p className="mt-10 text-center underline underline-offset-2 text-white text-xl font-semibold">
              {group.title}
            </p>
            {group.description && (
              <p className="mt-4 text-white text-md font-normal">
                {group.description}
              </p>
            )}
            <div className="mt-6 flex flex-col gap-6">
              {group.items.map((project) => (
                <div
                  key={project.title}
                  className={`p-2 flex flex-col rounded-lg bg-zinc-900 shadow-card md:h-[232px] md:flex-row`}
                >
                  <div className="grow flex flex-col pt-2 px-2 pb-4">
                    <h3 className="text-white text-xl font-semibold">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-white font-light text-sm">
                      {project.description}
                    </p>
                    <div className="flex items-baseline">
                      <span className="mt-2 mr-2 text-white font-light text-sm underline underline-offset-2">
                        Skills:
                      </span>
                      <span className="mt-2 flex gap-2 items-center flex-wrap">
                        {project.skills?.map((skill) => (
                          <SkillChip key={skill} name={skill} />
                        ))}
                      </span>
                    </div>
                    <div className="flex justify-end gap-2 pt-4 px-2">
                      {project.href && (
                        <a href={project.href} target="_blank">
                          <Button label="Access" icon={<FaExternalLinkAlt />} />
                        </a>
                      )}
                      <a href={project.githubHref} target="_blank">
                        <Button label="Code" icon={<FaGithub />} />
                      </a>
                    </div>
                  </div>
                  {(project.image || project.youtubeVideoId) && (
                    <div
                      className={`w-full self-center relative h-[140px] shrink-0 md:h-[216px] md:w-[316px]`}
                    >
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-top object-cover rounded-lg md:object-left"
                        />
                      ) : (
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${project.youtubeVideoId}`}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Fragment>
        ))}
      </SectionContainer>
    </section>
  )
}
