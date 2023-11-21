import { useElementSize } from '@/client/lib/hooks/use-element-size.js'
import { setSize } from '@/client/store/page-size.js'
import React from 'react'

export type TPageProps = {
  children: React.ReactNode
}

export const Page = ({ children }: TPageProps) => {
  const [pageRef] = useElementSize(setSize)

  return (
    <div
      ref={pageRef}
      className={'px-2  h-[90%] '}
      data-name="Page"
    >
      {children}
    </div>
  )
}
