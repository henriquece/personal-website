import { useEffect, useState } from 'react'
import { isMobileOnBrowser, isServer } from '@/utils/device'

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    if (!isServer()) {
      setIsMobile(isMobileOnBrowser(window.innerWidth))

      window.addEventListener('resize', () => {
        setIsMobile(isMobileOnBrowser(window.innerWidth))
      })
    }
  }, [])

  return isMobile
}
