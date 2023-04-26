import { useEffect, useState } from 'react'
import { debounce } from '@/utils/debounce'

type ScrollDirection = 'up' | 'down'

interface ScrollInfo {
  scrollDirection: ScrollDirection
  pageYOffset: number
}

export const useScrollListener = (timeout = 50) => {
  const [scrollInfo, setScrollInfo] = useState<ScrollInfo>({
    scrollDirection: 'up',
    pageYOffset: 0
  })

  const checkScrollInfo = debounce(() => {
    setScrollInfo((prevScrollInfo) => ({
      scrollDirection:
        prevScrollInfo.pageYOffset > window.pageYOffset ? 'up' : 'down',
      pageYOffset: window.pageYOffset
    }))
  }, timeout)

  useEffect(() => {
    window.addEventListener('scroll', checkScrollInfo)

    return () => window.removeEventListener('scroll', checkScrollInfo)
  }, [])

  return scrollInfo
}
