import { cn } from '@/client/lib/cn'

type TFormfieldsProps = {
  children: React.ReactNode
  className?: string
}

export function FormFields({ children, className }: TFormfieldsProps) {
  return (
    <div className={cn('grid gap-3 grid-cols-12', className)}>{children}</div>
  )
}
