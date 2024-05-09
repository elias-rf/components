// @ts-check
import { cn } from '../lib/utils.mjs'

// https://icon-sets.iconify.design/material-symbols/chevron-right-rounded/

/**
 * @property {object} [props]
 * @property {string} [props.className]
 * @property {'up' | 'down' | 'both' | 'none'} [props.direction]
 */
export function SortIcon({ direction = 'none', className }) {
  if (direction === 'up')
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={cn('inline-block h-5 w-5', className)}
        viewBox="0 0 32 32"
      >
        <title>sort up</title>
        <path d="m16 4l7 7l-1.4 1.4L16 6.8l-5.6 5.6L9 11z" />
      </svg>
    )
  if (direction === 'down')
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={cn('inline-block h-5 w-5', className)}
        viewBox="0 0 32 32"
      >
        <title>sorting down</title>
        <path d="m16 28l-7-7l1.4-1.4l5.6 5.6l5.6-5.6L23 21z" />
      </svg>
    )
  if (direction === 'both')
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={cn('inline-block h-5 w-5', className)}
        viewBox="0 0 32 32"
      >
        <title>sorting both</title>
        <path d="m16 28l-7-7l1.41-1.41L16 25.17l5.59-5.58L23 21l-7 7zm0-24l7 7l-1.41 1.41L16 6.83l-5.59 5.58L9 11l7-7z" />
      </svg>
    )
  return null
}
