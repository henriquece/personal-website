import Image from 'next/image'
import { SectionContainer } from '@/components/commons/SectionContainer'
import { SectionTitle } from '@/components/commons/SectionTitle'
import personalSiteImg from '../../../../public/project-personal-site.png'
import chatImg from '../../../../public/project-chat.png'
import { SkillChip } from '@/components/commons/SkillChip'
import { Button } from '@/components/commons/Button'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { HomeSection } from '@/pages'

const projects = [
  {
    title: 'Personal Site',
    description:
      'A ReactJS chat app built from scratch (no boilerplate, like CRA) with Sign In (Home), Sign Up and Chat (lazy-loaded) pages, which communicates with the Node.js Chat API.',
    skills: ['Next.js'],
    image: personalSiteImg,
    githubHref: 'https://github.com/henriquece/personal-site'
  },
  {
    title: 'Chat',
    description:
      'A ReactJS chat app built from scratch (no boilerplate, like CRA) with Sign In (Home).',
    skills: ['ReactJS'],
    image: chatImg,
    href: 'https://henriquece-chat.vercel.app',
    githubHref: 'https://github.com/henriquece/chat'
  }
]

export const Portfolio = () => {
  return (
    <section className="pt-20 md:pt-28" id={'portfolio' as HomeSection}>
      <SectionContainer>
        <SectionTitle title="Portfolio" />
        <div className="mt-7 flex flex-col gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`h-[382px] p-2 flex flex-col rounded-lg bg-zinc-900 shadow-card md:h-[210px] md:flex-row`}
            >
              <div className="grow flex flex-col pt-2 px-2 pb-4">
                <h3 className="text-white text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-white font-light text-sm">
                  {project.description}
                </p>
                <div className="flex items-center">
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
                  <a href={project.githubHref} target="_blank">
                    <Button label="Code" icon={<FaGithub />} />
                  </a>
                  {project.href && (
                    <a href={project.href} target="_blank">
                      <Button label="Access" icon={<FaExternalLinkAlt />} />
                    </a>
                  )}
                </div>
              </div>
              <div
                className={`w-full self-center relative h-[140px] shrink-0 md:h-[194px] md:w-[316px]`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}
