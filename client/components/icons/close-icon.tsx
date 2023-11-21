// https://icon-sets.iconify.design/material-symbols/chevron-right-rounded/

import { cn } from '@/client/lib/cn.js'

export function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn('w-5 h-5 inline-block', className)}
      viewBox="0 0 20 20"
    >
      <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
    </svg>
  )
}
