import { HeadingLevel as AriaKitHeadingLevel } from '@ariakit/react'

export function HeadingLevel({ children, level }) {
  return (
    <AriaKitHeadingLevel>
      {level} {children}
    </AriaKitHeadingLevel>
  )
}
