import { FC, PropsWithChildren, useEffect } from 'react'

interface DrawerProps {
  isOpen: boolean
  closeDrawer: () => void
}

export const Drawer: FC<PropsWithChildren<DrawerProps>> = ({
  isOpen,
  closeDrawer,
  children
}) => {
  useEffect(() => {
    document.body.style.overflowY = isOpen ? 'hidden' : 'initial'
  }, [isOpen])

  return (
    <>
      <div
        className={`fixed left-0 top-0 h-full w-full flex bg-opacity-80 z-10 bg-black ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      />
      <div
        className={`fixed left-0 top-0 h-full w-full flex duration-500 z-10 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="bg-secondary w-80">{children}</div>
        <div className="flex-1" onClick={closeDrawer} />
      </div>
    </>
  )
}
