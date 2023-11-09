import { cn } from '@/client/lib/cn'

export function PersonIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-5 h-5 inline-block', className)}
      viewBox="0 0 20 20"
    >
      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
    </svg>
  )
}
