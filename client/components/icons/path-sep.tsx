import { cn } from '@/client/lib/cn.js'

export function PathSepIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn('w-5 h-5 inline-block', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 9 4-4-4-4"
      />
    </svg>
  )
}
