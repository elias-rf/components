import { cn } from '@/client/lib/cn.js'

// https://icon-sets.iconify.design/material-symbols/chevron-right-rounded/
export type TChevronIconProps = {
  variant?: 'right' | 'down' | 'left' | 'up'
  className?: string
}

export function ChevronIcon({ variant, className }: TChevronIconProps) {
  let rotate = 0
  if (variant === 'down') rotate = 90
  if (variant === 'left') rotate = 180
  if (variant === 'up') rotate = 270

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-5 h-5 inline-block', className)}
      viewBox="0 0 24 24"
    >
      <g transform={`rotate(${rotate} 12 12)`}>
        <path
          fill="currentColor"
          d="M8.7 17.3q-.275-.275-.275-.7q0-.425.275-.7l3.9-3.9l-3.9-3.9q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l4.6 4.6q.15.15.213.325q.062.175.062.375t-.062.375q-.063.175-.213.325l-4.6 4.6q-.275.275-.7.275q-.425 0-.7-.275Z"
        />
      </g>
    </svg>
  )
}
