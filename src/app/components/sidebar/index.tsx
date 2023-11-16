import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  Search,
  LifeBuoy,
  SquareStack,
  Users,
} from 'lucide-react'
import { Logo } from './logo'
import { NavItem } from './nav-item'
import { UsedSpaceWidget } from './used-space-widget'
import { Profile } from './profile'
import * as Input from '../form/input'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>

      <nav className="space-y-0.5">
        <NavItem title="Home" path="/" icon={Home} />
        <NavItem title="Dashboard" path="/" icon={BarChart} />
        <NavItem title="Projects" path="/" icon={SquareStack} />
        <NavItem title="Tasks" path="/" icon={CheckSquare} />
        <NavItem title="Reporting" path="/" icon={Flag} />
        <NavItem title="Users" path="/" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" path="/" icon={LifeBuoy} />
          <NavItem title="Settings" path="/settings" icon={Cog} />
        </nav>
        <UsedSpaceWidget />
        <div className="h-px bg-zinc-200" />
        <Profile />
      </div>
    </aside>
  )
}
