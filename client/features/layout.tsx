import { NoPrint } from '@/client/components/no-print/no-print.js'
import { Page } from '@/client/components/page/page.js'
import { NavbarApp } from '@/client/features/navbar-app.js'

/** feature Layout com menu de páginas do aplicativo */
export function Layout({ children }: { children?: any }) {
  return (
    <div
      className="flex h-full w-full flex-col dark:bg-gray-900"
      data-name="Layout"
    >
      <NoPrint>
        <NavbarApp />
      </NoPrint>

      {children}
    </div>
  )
}
