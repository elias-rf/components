import { Page } from '@/client/components/page/page.js'
import { NoPrint } from '@/client/components/ui-old/no-print.js'
import { NavbarApp } from '@/client/features/navbar-app.js'

/** feature Layout com menu de páginas do aplicativo */
export function Layout({ children }: { children?: any }) {
  return (
    <div
      className="flex h-screen w-full flex-col dark:bg-gray-900"
      data-name="Layout"
    >
      <NoPrint>
        <NavbarApp />
      </NoPrint>
      <div className="h-full overflow-y-auto">
        <Page>{children}</Page>
      </div>
    </div>
  )
}
