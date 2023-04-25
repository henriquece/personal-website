import { FC, PropsWithChildren } from 'react'

interface DrawerProps {
  isOpen: boolean
  closeDrawer: () => void
}

export const Drawer: FC<PropsWithChildren<DrawerProps>> = ({
  isOpen,
  closeDrawer,
  children
}) => (
  <>
    <div
      className={`absolute left-0 top-0 h-full w-full flex bg-opacity-80 bg-black ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    />
    <div
      className={`absolute left-0 top-0 h-full w-full flex duration-500 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="bg-secondary w-80">{children}</div>
      <div className="flex-1" onClick={closeDrawer} />
    </div>
  </>
)
