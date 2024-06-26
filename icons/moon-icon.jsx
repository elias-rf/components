// @ts-check
import { cn } from '../lib/utils.mjs'

/**
 * @typedef {object} MoonIconProps
 * @property {string} [className]
 */

/**
 * @type {React.FC<MoonIconProps>}
 */
export const MoonIcon = ({ className }) => {
  return (
    <svg
      className={cn('inline-block h-5 w-5', className)}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
    </svg>
  )
}
