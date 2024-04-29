import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const twcx = (...inputs) => {
  return twMerge(clsx(...inputs))
}

/**
 *
 * @param cvaInstance the cva function to use
 * @returns a function that takes the variants and className and returns the merged classnames
 */
export const twCva = (cvaFn) => {
  return (variants, ...classList) => twcx(cvaFn(variants), ...classList)
}
