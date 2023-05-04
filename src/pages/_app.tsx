import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer } from '@/components/commons/Footer'
import { useMobile } from '@/hooks/useMobile'

export interface PageProps {
  isMobile: boolean
}

export default function App({ Component, pageProps }: AppProps) {
  const isMobile = useMobile()

  return (
    <>
      <Component {...pageProps} isMobile={isMobile} />
      <Footer />
    </>
  )
}
