import { Link } from 'react-router-dom'
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
      to={href}
      onClick={onClickEvent}
      className={cn('block w-full', className)}
      {...others}
    >
      {children}
    </Link>
  )
}
