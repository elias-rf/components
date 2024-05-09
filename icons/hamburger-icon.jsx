// @ts-check
import { cn } from '../lib/utils.mjs'

/**
 * @property {object} [props]
 * @property {string} [props.className]
 */
export function HamburgerIcon({ className }) {
  return (
    <svg
      className={cn('inline-block h-5 w-5', className)}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 17 14"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 1h15M1 7h15M1 13h15"
      />
    </svg>
  )
}
