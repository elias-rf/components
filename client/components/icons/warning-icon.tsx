import { cn } from '@/client/lib/cn'

export function WarningIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn('w-5 h-5 inline-block', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
    </svg>
  )
}
