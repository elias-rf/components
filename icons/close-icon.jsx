// @ts-check
// https://icon-sets.iconify.design/material-symbols/chevron-right-rounded/

import { cn } from '../lib/utils.mjs'

/**
 * @typedef {object} CloseIconProps
 * @property {string} [className]
 */

/**
 * @type {React.FC<CloseIconProps>}
 */
export const CloseIcon = ({ className }) => {
  return (
    <svg
      className={cn('inline-block h-5 w-5', className)}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
    </svg>
  )
}
