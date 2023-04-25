import { Roboto } from 'next/font/google'
import { Presentation } from '@/components/Home/Presentation'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin']
})

export default function Home() {
  return (
    <>
      <main className={`${roboto.className} h-screen bg-primary`}>
        <Presentation />
      </main>
    </>
  )
}
