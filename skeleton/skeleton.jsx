import { cn } from '../lib/utils.mjs'

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-slate-900/10 dark:bg-slate-50/10',
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
