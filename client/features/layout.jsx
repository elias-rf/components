import { NoPrint } from '../components_/no-print/no-print.jsx'
import { NavbarApp } from '../features/navbar-app.jsx'

/** feature Layout com menu de páginas do aplicativo */
export function Layout({ children }) {
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
