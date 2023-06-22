import { FC, ReactNode } from 'react'

interface ButtonProps {
  label: string
  icon?: ReactNode
}

export const Button: FC<ButtonProps> = ({ label, icon }) => (
  <button className="w-fit flex items-center gap-2 py-1 px-6 rounded-full bg-secondary text-white font-semibold">
    {label}
    {icon}
  </button>
)
