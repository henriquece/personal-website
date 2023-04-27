import Image from 'next/image'
import { SectionContainer } from '@/components/commons/SectionContainer'
import { SectionTitle } from '@/components/commons/SectionTitle'
import personalSiteImg from '../../../../public/project-personal-site.png'
import chatImg from '../../../../public/project-chat.png'
import { SkillChip } from '@/components/commons/SkillChip'
import { Button } from '@/components/commons/Button'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

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
    <section className="pt-20 lg:pt-28">
      <SectionContainer>
        <SectionTitle title="Portfolio" />
        <div className="mt-7 flex flex-col gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`h-[382px] flex flex-col rounded-lg bg-zinc-900 shadow-[-16px_0_48px_#000000] lg:h-auto lg:flex-row`}
            >
              <div className="grow flex flex-col p-4 border-l border-primary">
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
                <div className="flex justify-end gap-2 pt-4">
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
                className={`relative h-[140px] shrink-0 lg:h-[194px] lg:w-[316px]`}
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
