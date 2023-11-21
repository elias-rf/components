import { Page } from '@/client/components/page/page.js'
import { NoPrint } from '@/client/components/ui/no-print.js'
import { Navbar } from '@/client/features/navbar.js'

/** feature Layout com menu de páginas do aplicativo */
export function Layout({ children }: { children?: any }) {
  return (
    <div
      className="flex flex-col w-full h-screen dark:bg-gray-900"
      data-name="Layout"
    >
      <NoPrint>
        <Navbar />
      </NoPrint>
      <div className="h-full overflow-y-auto">
        <Page>{children}</Page>
      </div>
    </div>
  )
}
