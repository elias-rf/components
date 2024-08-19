import { DisclosureContent as AriakitDisclosureContent } from '@ariakit/react'

export function DisclosureContent({ children }) {
  return (
    <AriakitDisclosureContent className="content">
      {children}
    </AriakitDisclosureContent>
  )
}
