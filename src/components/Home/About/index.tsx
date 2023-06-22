import { SectionContainer } from '@/components/commons/SectionContainer'
import { SectionTitle } from '@/components/commons/SectionTitle'
import { HomeSection } from '@/pages'
import { FC } from 'react'
import { FaLaptopCode } from 'react-icons/fa'

interface AboutProps {
  isMobile: boolean
}

export const About: FC<AboutProps> = ({ isMobile }) => {
  return (
    <section className="pt-20 lg:pt-28" id={'about' as HomeSection}>
      <SectionContainer>
        <div className="flex flex-col items-center md:flex-row md:justify-around">
          <FaLaptopCode
            className="mb-4 text-secondary lg:mb-0"
            size={isMobile ? 120 : 180}
          />
          <div>
            <SectionTitle title="About Me" />
            <div className="max-w-xs mt-5 text-white text-center font-light md:max-w-lg md:text-left">
              <p>
                I&apos;m a <b>Front-end Developer</b> with experience at web
                applications development using <b>JavaScript</b>, <b>ReactJS</b>
                , <b>Next.js</b> and other libraries and tools.
              </p>
              <p className="mt-4">
                Currently, I&apos;m Senior Front-end Engineer at Seedz and I
                keep looking for new challenges and opportunities to grow.
              </p>
              <p className="mt-4">
                I&apos;m passionate about <b>building things</b> and{' '}
                <b>solving problems</b> using <b>code</b>.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
