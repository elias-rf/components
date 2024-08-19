import { Checkbox as CheckboxBase } from '@ariakit/react'
import PropTypes from 'prop-types'
import { cn } from '../lib/utils.mjs'
import './checkbox.css'

/**
 * @typedef {Object} Props
 * @property {import('react').LegacyRef<HTMLButtonElement>} [ref]
 * @property {string} [className]
 * @property {boolean} [checked]
 * @property {boolean} [disabled]
 * @property {(e:any)=>void} [onCheckedChange]
 */

/**
 * @type {React.FC<Props>}
 */
export const Checkbox = ({ className, ...props }) => (
  <CheckboxBase
    className={cn('outline-blue-400', className)}
    {...props}
  ></CheckboxBase>
)

Checkbox.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
}
