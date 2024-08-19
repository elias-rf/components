import { Disclosure as AriakitDisclosure } from '@ariakit/react'
import './disclosure.css'

export function DisclosureHeading({ children }) {
  return <AriakitDisclosure className="button">{children}</AriakitDisclosure>
}
