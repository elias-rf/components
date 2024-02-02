import React from 'react'

export type TPageProps = {
  children: React.ReactNode
}

export const Page = ({ children }: TPageProps) => {
  return (
    <div
      className={'h-[93%] px-2'}
      data-name="Page"
    >
      {children}
    </div>
  )
}
