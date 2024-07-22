// @ts-check
import { cn } from '../lib/utils.mjs'

/**
 * @property {object} [props]
 * @property {string} [props.className]
 */
export function FireIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block h-5 w-5', className)}
      viewBox="0 0 18 20"
      fill="currentColor"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"
      />
    </svg>
  )
}
