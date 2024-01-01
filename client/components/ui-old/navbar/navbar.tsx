import { NavbarBrand } from '@/client/components/ui-old/navbar/navbar_brand.js'
import { NavbarCollapse } from '@/client/components/ui-old/navbar/navbar_collapse.js'
import { ShowContext } from '@/client/components/ui-old/navbar/navbar_context.js'
import { NavbarItem } from '@/client/components/ui-old/navbar/navbar_item.js'
import { NavbarMenu } from '@/client/components/ui-old/navbar/navbar_menu.js'
import { NavbarToggle } from '@/client/components/ui-old/navbar/navbar_toggle.js'
import { cn } from '@/client/lib/cn.js'
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
        className={cn('border-gray-200 bg-white dark:bg-gray-900', className)}
      >
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-1">
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
