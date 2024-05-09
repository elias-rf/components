import { Link } from 'wouter'
import { cn } from './lib/utils.mjs'

export function Anchor({
  href,
  onClickEvent = () => null,
  children,
  className,
  ...others
}) {
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
