interface HeaderItem {
  label: string
  href: string
}

const headerItems: HeaderItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Contact', href: '#contact' }
]

export const Header = () => (
  <header className="h-16 flex justify-center items-center bg-primary">
    <ul className="flex gap-x-10">
      {headerItems.map((item) => (
        <li key={item.label} className="text-white text-lg font-bold">
          <a href={item.href}>{item.label}</a>
        </li>
      ))}
    </ul>
  </header>
)
