import { useElementSize } from '@/client/lib/hooks/use-element-size.js'
import { pageSizeState } from '@/client/store/page-size-store.js'
import React from 'react'

export type TPageProps = {
  children: React.ReactNode
}

export const Page = ({ children }: TPageProps) => {
  const [pageRef] = useElementSize(pageSizeState)

  return (
    <div
      ref={pageRef}
      className={'h-[93%] px-2'}
      data-name="Page"
    >
      {children}
    </div>
  )
}
