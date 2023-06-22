import { Roboto } from 'next/font/google'
import { Presentation } from '@/components/Home/Presentation'
import { About } from '@/components/Home/About'
import { PageProps } from './_app'
import { Skills } from '@/components/Home/Skills'
import { Portfolio } from '@/components/Home/Portfolio'
import { Experiences } from '@/components/Home/Experiences'
import { Header } from '@/components/Header'
import Head from 'next/head'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin']
})

export type HomeSection =
  | 'presentation'
  | 'about'
  | 'skills'
  | 'portfolio'
  | 'experiences'

export default function Home({ isMobile }: PageProps) {
  return (
    <>
      <Head>
        <title>Henrique Leite - Front-end Developer</title>
      </Head>
      <Header isMobile={isMobile} />
      <main className={`${roboto.className} bg-primary`}>
        <Presentation />
        <About isMobile={isMobile} />
        <Skills />
        <Portfolio />
        <Experiences />
      </main>
    </>
  )
}
