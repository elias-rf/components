// @ts-check
import { cn } from '../lib/utils.mjs'

const colorProp = {
  black: '#000',
  white: '#fff',
  blue: '#008bd1',
}

/**
 * @typedef {Object} VtLogoIconProps
 * @property {string} [className]
 * @property {'black'|'white'|'blue'} [props.color]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<VtLogoIconProps>}
 */
export const VtLogoIcon = ({ className, color = 'blue' }) => {
  return (
    <svg
      viewBox="0 0 365 470"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block h-5 w-5', className)}
      fill="currentColor"
    >
      <title>VT Logo</title>
      <path
        d="m221.37 30.32c-41.45-44.4-118.91-39.46-173.01 11.05-54.1 50.5-64.36 127.44-22.91 171.84s118.91 39.45 173.01-11.06c54.1-50.5 64.36-127.44 22.91-171.83zm-46 131.77c-40.81 38.1-99.26 41.8-130.55 8.28-31.3-33.52-23.58-91.58 17.23-129.68 40.81-38.09 99.26-41.8 130.55-8.28 31.3 33.52 23.58 91.58-17.23 129.68z"
        fill={colorProp[color]}
      />
      <path
        d="m280.2 143.27c-41.45-44.4-118.91-39.46-173.01 11.05-54.1 50.5-64.36 127.44-22.91 171.84s118.9 39.45 173.01-11.06c54.1-50.5 64.35-127.43 22.91-171.83zm-46 131.77c-40.81 38.1-99.26 41.8-130.55 8.28-31.3-33.52-23.58-91.58 17.23-129.68 40.81-38.09 99.26-41.8 130.55-8.28 31.3 33.53 23.58 91.58-17.23 129.68z"
        fill={colorProp[color]}
      />
      <path
        d="m339.2 256.95c-41.45-44.4-118.91-39.45-173.01 11.05-54.1 50.51-64.36 127.44-22.91 171.84s118.91 39.46 173.01-11.05c54.1-50.5 64.36-127.44 22.91-171.84zm-46 131.78c-40.8 38.09-99.26 41.8-130.55 8.28-31.3-33.53-23.58-91.59 17.23-129.68 40.81-38.1 99.26-41.81 130.55-8.28 31.3 33.52 23.58 91.58-17.23 129.68z"
        fill={colorProp[color]}
      />
    </svg>
  )
}
