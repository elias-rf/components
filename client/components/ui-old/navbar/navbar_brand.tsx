import { cn } from '@/client/lib/utils.js'

export function NavbarBrand({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}) {
  return (
    <div
      onClick={onClick}
      className={cn('flex items-center', className)}
    >
      {children}
    </div>
  )
}
