import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '@/components/Header'
import { useMobile } from '@/hooks/useMobile'

export default function App({ Component, pageProps }: AppProps) {
  const isMobile = useMobile()

  return (
    <>
      <Header isMobile={isMobile} />
      <Component {...pageProps} />
    </>
  )
}
