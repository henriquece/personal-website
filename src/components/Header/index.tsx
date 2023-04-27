import { FC, useState } from 'react'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa'
import { useScrollListener } from '@/hooks/useScrollListener'
import { SectionContainer } from '../commons/SectionContainer'
import { Drawer } from '../commons/Drawer'
import logoImg from '../../../public/logo.png'

interface HeaderProps {
  isMobile: boolean
}

interface HeaderItem {
  label: string
  href: string
}

const headerItems: HeaderItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Experiences', href: '#experiences' }
  // { label: 'Contact', href: '#contact' }
]

export const Header: FC<HeaderProps> = ({ isMobile }) => {
  const [activeSection, setActiveSection] = useState('#home')

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const { pageYOffset } = useScrollListener(10)

  const headerItemsList = (
    <ul className="flex flex-col pt-16 pl-5 gap-y-4 lg:flex-row lg:gap-x-10 lg:pt-0 lg:pl-0">
      {headerItems.map((item) => (
        <li key={item.label} onClick={() => setActiveSection(item.href)}>
          <a
            className={`pb-2 ${
              activeSection === item.href && 'border-b'
            } text-white text-lg font-bold lg:hover:text-secondary transition-colors duration-400 ${
              activeSection === item.href && 'border-b'
            }`}
            href={item.href}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )

  return (
    <header
      className={`sticky top-0 duration-200 ${
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
              <Drawer
                isOpen={isDrawerOpen}
                closeDrawer={() => setIsDrawerOpen(false)}
              >
                {headerItemsList}
              </Drawer>
            </>
          ) : (
            headerItemsList
          )}
        </div>
      </SectionContainer>
    </header>
  )
}
