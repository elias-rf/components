import { getAccessKey } from '@/utils/string/get-access-key'
import { ReactNode } from 'react'

type TAccessLabel = {
  accessKey?: string
  children: ReactNode
}

export function AccessLabel({ children }: TAccessLabel) {
  if (typeof children !== 'string') return <span>{children}</span>

  const chd = getAccessKey(children)

  return (
    <span>
      {chd.initial}
      <span className="font-bold underline">{chd.middle}</span>
      {chd.final}
    </span>
  )
}
