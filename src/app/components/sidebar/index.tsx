'use client'

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
  Menu,
} from 'lucide-react'
import { Logo } from './logo'
import { NavItem } from './nav-item'
import { UsedSpaceWidget } from './used-space-widget'
import { Profile } from './profile'
import * as Collapsible from '@radix-ui/react-collapsible'
import * as Input from '@/app/components/form/input'
import { Button } from '@/app/components/button'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white dark:bg-zinc-900 dark:border-zinc-800 p-4 data-[state=open]:bottom-0 lg:right-auto  lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className='flex items-center justify-between'>
        <Logo />
        <Collapsible.Trigger asChild className='lg:hidden'>
          <Button variant='ghost'>
            <Menu className='h-6 w-6' />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content forceMount className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex">
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
          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />
          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
