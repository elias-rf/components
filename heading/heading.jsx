import { Heading as AriaKitHeading } from '@ariakit/react'

export function Heading({ children, level }) {
  return (
    <AriaKitHeading className="heading">
      {level}
      {children}
    </AriaKitHeading>
  )
}
