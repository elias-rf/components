import { useElementSize } from '@/client/lib/hooks/use-element-size'
import { usePageSize } from '@/client/store/page-size'
import React from 'react'

export type TPageProps = {
  children: React.ReactNode
}

export const Page = ({ children }: TPageProps) => {
  const pageSize = usePageSize()
  const [pageRef, size] = useElementSize()

  React.useEffect(() => {
    pageSize.setSize(size)
  }, [size])

  return (
    <div
      ref={pageRef}
      className={'px-2  h-[90%]'}
      data-name="Page"
    >
      {children}
    </div>
  )
}
