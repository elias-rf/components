import { DisclosureProvider as AriakitDisclosureProvider } from '@ariakit/react'
import './disclosure.css'

export function Disclosure({ children }) {
  return (
    <div className="wrapper">
      <AriakitDisclosureProvider>{children}</AriakitDisclosureProvider>
    </div>
  )
}
