// @ts-check
import { cn } from '../lib/utils.mjs'

/**
 * @property {object} [props]
 * @property {string} [props.className]
 */
export function PersonIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block h-5 w-5', className)}
      viewBox="0 0 20 20"
    >
      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
    </svg>
  )
}
