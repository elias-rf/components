// @ts-check
import { cn } from '../lib/utils.mjs'

/**
 * @typedef {object} WarningIconProps
 * @property {string} [className]
 */

/**
 * @type {React.FC<WarningIconProps>}
 */
export const WarningIcon = ({ className }) => {
  return (
    <svg
      className={cn('inline-block h-5 w-5', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <title>warning</title>
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
    </svg>
  )
}
