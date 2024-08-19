import { Tab as AriakitTab } from '@ariakit/react'

export function Tab({ children, id }) {
  return (
    <AriakitTab
      className="tab"
      id={id}
    >
      {children}
    </AriakitTab>
  )
}
