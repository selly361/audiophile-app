import { useEffect, useState } from 'react'

type UseMatchMediaType = {
  isDesktopSize: boolean
  isTabletSize: boolean
  isMobileSize: boolean
}

export const useMatchMedia = (): UseMatchMediaType => {
  const mobileQuery = window.matchMedia('(min-width: 320px) and (max-width: 767px)')
  const tabletQuery = window.matchMedia('(min-width: 768px) and (max-width: 1023px)')
  const desktopQuery = window.matchMedia('(min-width: 1024px)')

  const [isMobileSize, setIsMobileSize] = useState(false)
  const [isTabletSize, setIsTabletSize] = useState(false)
  const [isDesktopSize, setIsDesktopSize] = useState(false)

  const handleMobileMediaChanged = (e: MediaQueryList | MediaQueryListEvent) => {
    setIsMobileSize(e.matches)
  }

  const handleTabletMediaChanged = (e: MediaQueryList | MediaQueryListEvent) => {
    setIsTabletSize(e.matches)
  }

  const handleDesktopMediaChanged = (e: MediaQueryList | MediaQueryListEvent) => {
    setIsDesktopSize(e.matches)
  }

  useEffect(() => {
    handleMobileMediaChanged(mobileQuery)
    handleTabletMediaChanged(tabletQuery)
    handleDesktopMediaChanged(desktopQuery)

    try {
      mobileQuery.addEventListener('change', handleMobileMediaChanged)
      tabletQuery.addEventListener('change', handleTabletMediaChanged)
      desktopQuery.addEventListener('change', handleDesktopMediaChanged)
    } catch (e) {
      // for old browser
      mobileQuery.addListener(handleMobileMediaChanged)
      tabletQuery.addListener(handleTabletMediaChanged)
      desktopQuery.addListener(handleDesktopMediaChanged)
    }

    return () => {
      try {
        mobileQuery.removeEventListener('change', handleMobileMediaChanged)
        tabletQuery.removeEventListener('change', handleTabletMediaChanged)
        desktopQuery.removeEventListener('change', handleDesktopMediaChanged)
      } catch (e) {
        // for old browser
        mobileQuery.removeListener(handleMobileMediaChanged)
        tabletQuery.removeListener(handleTabletMediaChanged)
        desktopQuery.removeListener(handleDesktopMediaChanged)
      }
    }
  }, [desktopQuery, mobileQuery, tabletQuery])

  return { isMobileSize, isTabletSize, isDesktopSize }
}

export default useMatchMedia
