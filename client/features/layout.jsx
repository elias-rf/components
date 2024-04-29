import { NoPrint } from '../components/no-print/no-print.jsx'
import { NavbarApp } from '../features/navbar-app.jsx'

/** feature Layout com menu de páginas do aplicativo */
export function Layout({ children }) {
  return (
    <div
      className="flex flex-col w-full h-full dark:bg-gray-900"
      data-name="Layout"
    >
      <NoPrint>
        <NavbarApp />
      </NoPrint>

      {children}
    </div>
  )
}
