import { cn } from '@/client/lib/cn'

export function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn('w-5 h-5 inline-block', className)}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
    </svg>
  )
}
