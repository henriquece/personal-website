import { FC, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa'
import { useScrollListener } from '@/hooks/useScrollListener'
import { SectionContainer } from '../commons/SectionContainer'
import { Drawer } from '../commons/Drawer'
import logoImg from '../../../public/logo.png'
import { isServer } from '@/utils/device'
import { HomeSection } from '@/pages'

interface HeaderProps {
  isMobile: boolean
}

type HomeSectionHref = HomeSection | ''

interface HeaderItem {
  label: string
  href: HomeSectionHref
}

const headerItems: HeaderItem[] = [
  { label: 'Home', href: '' },
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Portfolio', href: 'portfolio' },
  { label: 'Experiences', href: 'experiences' }
]

export const Header: FC<HeaderProps> = ({ isMobile }) => {
  const [sectionsOffsetTop, setSectionsOffsetTop] = useState<
    [HomeSectionHref, number][]
  >([['', 0]])

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const { pageYOffset } = useScrollListener(10)

  useEffect(() => {
    const [
      aboutSectionOffsetTop,
      skillsSectionOffsetTop,
      portfolioSectionOffsetTop,
      experiencesSectionOffsetTop
    ] = (['about', 'skills', 'portfolio', 'experiences'] as HomeSection[]).map(
      (section) => document.getElementById(section)?.offsetTop as number
    )

    setSectionsOffsetTop([
      ['experiences', experiencesSectionOffsetTop],
      ['portfolio', portfolioSectionOffsetTop],
      ['skills', skillsSectionOffsetTop],
      ['about', aboutSectionOffsetTop],
      ['', 0]
    ])
  }, [])

  let activeSection = ''

  if (!isServer()) {
    activeSection = (
      sectionsOffsetTop.find((section) => section[1] < window.scrollY + 60) as [
        HomeSection,
        number
      ]
    )[0]
  }

  const headerItemsList = (
    <ul className="flex flex-col pt-16 pl-5 gap-y-4 lg:flex-row lg:gap-x-10 lg:pt-0 lg:pl-0">
      {headerItems.map((item) => (
        <li key={item.label}>
          <a
            className={`pb-2 ${
              activeSection === item.href && 'border-b'
            } text-white text-lg font-bold lg:hover:text-secondary transition-colors duration-400`}
            href={`#${item.href}`}
            onClick={() => setIsDrawerOpen(false)}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )

  const drawer = (
    <Drawer isOpen={isDrawerOpen} closeDrawer={() => setIsDrawerOpen(false)}>
      {headerItemsList}
    </Drawer>
  )

  return (
    <header
      className={`sticky top-0 duration-200 z-10 ${
        pageYOffset < 92 ? 'bg-transparent' : 'bg-zinc-900'
      }`}
    >
      <SectionContainer>
        <div className="flex justify-between items-center py-4">
          <Image src={logoImg} alt="Henrique.dev logo image" height={50} />
          {isMobile ? (
            <>
              <FaBars
                size={22}
                onClick={() => setIsDrawerOpen(true)}
                className="text-white lg:text-primary"
              />
              {isServer() ? drawer : createPortal(drawer, document.body)}
            </>
          ) : (
            headerItemsList
          )}
        </div>
      </SectionContainer>
    </header>
  )
}
