import { FC, PropsWithChildren } from 'react'

export const SectionContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className="max-w-[960px] mx-auto px-4">{children}</div>
}
