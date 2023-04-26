import { Roboto } from 'next/font/google'
import { Presentation } from '@/components/Home/Presentation'
import { About } from '@/components/Home/About'
import { PageProps } from './_app'
import { Skills } from '@/components/Home/Skills'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin']
})

export default function Home({ isMobile }: PageProps) {
  return (
    <>
      <main className={`${roboto.className} bg-primary`}>
        <Presentation />
        <About isMobile={isMobile} />
        <Skills />
      </main>
    </>
  )
}
