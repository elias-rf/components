import { cn } from '@/client/lib/cn'
import React from 'react'
import { Link } from 'wouter'

type TAProps = {
  href: string
  onClickEvent?: (e: React.SyntheticEvent) => void
  children: React.ReactElement | string
  className?: string
}

export function Anchor({
  href,
  onClickEvent = () => null,
  children,
  className,
  ...others
}: TAProps) {
  return (
    <Link
      href={href}
      onClick={onClickEvent}
      className={cn('block w-full', className)}
      {...others}
    >
      {children}
    </Link>
  )
}
