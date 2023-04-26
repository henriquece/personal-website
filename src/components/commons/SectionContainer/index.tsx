import { FC, PropsWithChildren } from 'react'

export const SectionContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className="mx-auto px-4 lg:max-w-[960px]">{children}</div>
}
