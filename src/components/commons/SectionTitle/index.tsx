import { FC } from 'react'

interface SectionTitleProps {
  title: string
}

export const SectionTitle: FC<SectionTitleProps> = ({ title }) => (
  <h2 className="text-white text-3xl font-semibold text-center">{title}</h2>
)
