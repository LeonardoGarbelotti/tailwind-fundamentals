import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { ElementType } from 'react'

interface NavItemProps {
  title: string
  path: string
  icon: ElementType
}

export function NavItem({ title, path, icon: Icon }: NavItemProps) {
  return (
    <nav className="space-y-0.5">
      <Link
        href={`${path}`}
        className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50 dark:hover:bg-zinc-800"
      >
        <Icon className="h-5 w-5 text-zinc-500" />
        <span className="font-medium text-zinc-700 group-hover:text-violet-500 dark:text-zinc-100 dark:group-hover:text-violet-300">
          {title}
        </span>
        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300 dark:to-zinc-600" />
      </Link>
    </nav>
  )
}
