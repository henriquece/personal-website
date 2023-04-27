import { FC } from 'react'

interface SkillChipProps {
  name: string
}

export const SkillChip: FC<SkillChipProps> = ({ name }) => (
  <span className="py-1 px-2 border border-secondary rounded text-white text-sm">
    {name}
  </span>
)
