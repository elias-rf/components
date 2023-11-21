import { cn } from '@/client/lib/cn.js'

export function DelDocIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={cn('w-5 h-5 inline-block', className)}
    >
      <path d="M6 4v5v-5v16v-.238V20V4Zm0 18q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h7.175q.4 0 .763.15q.362.15.637.425l4.85 4.85q.275.275.425.637q.15.363.15.763v3.525q-.475-.175-.975-.263Q18.525 12 18 12V9h-3q-.825 0-1.412-.588Q13 7.825 13 7V4H6v16h6.35q.2.575.5 1.075t.7.925Zm12-2.575L16.6 20.8q-.275.275-.688.287q-.412.013-.712-.287q-.275-.275-.275-.7q0-.425.275-.7l1.4-1.4l-1.4-1.4q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l1.4 1.4l1.4-1.4q.275-.275.687-.288q.413-.012.713.288q.275.275.275.7q0 .425-.275.7L19.425 18l1.375 1.4q.275.275.288.687q.012.413-.288.713q-.275.275-.7.275q-.425 0-.7-.275Z" />
    </svg>
  )
}
