import Image from 'next/image'
import { IconType } from 'react-icons'
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt
} from 'react-icons/fa'
import { SectionContainer } from '@/components/commons/SectionContainer'
import profileImg from '../../../../public/profile.jpg'
import { HomeSection } from '@/pages'

const contacts: {
  icon: IconType
  value: string
}[] = [
  { icon: FaEnvelope, value: 'henriquehcleite@gmail.com' },
  { icon: FaMapMarkerAlt, value: 'São Paulo, Brazil' }
]

const socialMedias: {
  icon: IconType
  href: string
}[] = [
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/henrique-cesar-leite'
  },
  { icon: FaGithub, href: 'https://github.com/henriquece' }
]

export const Presentation = () => {
  return (
    <section className="pt-10 lg:pt-28" id={'presentation' as HomeSection}>
      <SectionContainer>
        <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-between">
          <div className="w-fit border-[20px] border-black border-opacity-90 rounded-full lg:mr-16">
            <Image
              src={profileImg}
              alt="Henrique's profile picture"
              height={280}
              className="border-[20px] border-black border-opacity-40 rounded-full"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <p className="mt-8 py-2 px-8 rounded-t-2xl rounded-ee-2xl bg-secondary text-white">
              Hello, I&apos;m
            </p>
            <h2 className="mt-5 text-white text-4xl font-semibold">
              Henrique Leite
            </h2>
            <h4 className="mt-4 text-white text-xl font-medium">
              Front-end Developer
            </h4>
            <ul className="mt-4">
              {contacts.map(({ icon: Icon, value }) => (
                <li
                  key={value}
                  className="flex justify-center items-center gap-x-3 mt-3 text-white font-light lg:justify-start"
                >
                  <Icon />
                  <a>{value}</a>
                </li>
              ))}
            </ul>
            <ul className="mt-4 flex gap-x-8">
              {socialMedias.map(({ icon: Icon, href }) => (
                <li
                  key={href}
                  className="flex justify-center items-center gap-x-3 mt-3 text-white font-light"
                >
                  <a href={href} target="_blank">
                    <Icon size={22} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
