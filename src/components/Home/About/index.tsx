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
        <div className="flex flex-col items-center lg:flex-row lg:justify-around">
          <FaLaptopCode
            className="mb-4 text-secondary lg:mb-0"
            size={isMobile ? 120 : 180}
          />
          <div>
            <SectionTitle title="About Me" />
            <p className="max-w-xs mt-5 text-white text-center font-light lg:max-w-lg lg:text-left">
              I’m a Front-end developer, with more than 4 years of experience at
              web applications development, using JavaScript, ReactJS, Next.js
              and other libraries and tools. Currently, I’m Head of Front-end
              development at Mobiauto and I keep looking for new challenges and
              opportunities to grow. I’m passionate about creating solutions
              that deliver value and improve customers&apos; experience.
              I&apos;m also constantly looking to evolve and expand my
              knowledge.
            </p>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
