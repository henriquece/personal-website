import { SectionContainer } from '@/components/commons/SectionContainer'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-8 py-4 bg-zinc-900 lg:mt-16">
      <SectionContainer>
        <p className="text-white text-center text-xs">
          HENRIQUECE @ {currentYear}
        </p>
      </SectionContainer>
    </footer>
  )
}
