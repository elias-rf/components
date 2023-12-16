import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const twcx = (...inputs: ClassValue[]) => {
  return twMerge(clsx(...inputs))
}

/**
 *
 * @param cvaInstance the cva function to use
 * @returns a function that takes the variants and className and returns the merged classnames
 */
export const twCva = <T extends (props: any) => string>(cvaFn: T) => {
  return (variants?: Parameters<T>[0], ...classList: ClassValue[]) =>
    twcx(cvaFn(variants), ...classList)
}
