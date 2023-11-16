import { NavbarBrand } from '@/client/components/ui/navbar/navbar_brand'
import { NavbarCollapse } from '@/client/components/ui/navbar/navbar_collapse'
import { ShowContext } from '@/client/components/ui/navbar/navbar_context'
import { NavbarItem } from '@/client/components/ui/navbar/navbar_item'
import { NavbarMenu } from '@/client/components/ui/navbar/navbar_menu'
import { NavbarToggle } from '@/client/components/ui/navbar/navbar_toggle'
import { cn } from '@/client/lib/cn'
import { useState } from 'react'

function Navbar({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const [show, setShow] = useState(false)
  return (
    <ShowContext.Provider value={{ show, setShow }}>
      <nav
        className={cn('bg-white border-gray-200 dark:bg-gray-900', className)}
      >
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          {children}
        </div>
      </nav>
    </ShowContext.Provider>
  )
}

Navbar.Brand = NavbarBrand
Navbar.Collapse = NavbarCollapse
Navbar.Item = NavbarItem
Navbar.Menu = NavbarMenu
Navbar.Toggle = NavbarToggle
export { Navbar }