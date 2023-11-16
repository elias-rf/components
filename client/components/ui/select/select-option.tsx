import { ReactNode } from 'react'

export function SelectOption({
  value,
  children,
}: {
  value: string
  children: ReactNode
}) {
  return (
    <>
      <option value={value}>{children}</option>
    </>
  )
}
