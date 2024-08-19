import * as Ariakit from '@ariakit/react'
import PropTypes from 'prop-types'
import { cn } from '../lib/utils.mjs'
import './combobox.css'

/**
 * @typedef {Object} ComboboxProps
 * @property {{value:string, label:string}[]} [options]
 * @property {string} [value]
 * @property {string} [placeholder]
 * @property {string} [inputPlaceholder]
 * @property {(event:any)=>void} [onValueChange]
 * @property {boolean} [disabled]
 * @property {(e:any)=>void} [onCheckedChange]
 */

/**
 * @type {React.FC<ComboboxProps>}
 */
export const Combobox = ({ value, label, options }) => {
  return (
    <Ariakit.ComboboxProvider>
      <Ariakit.ComboboxLabel className="label">{label}</Ariakit.ComboboxLabel>
      <Ariakit.Combobox
        placeholder="e.g., Apple"
        className="combobox"
      />
      <Ariakit.ComboboxPopover
        gutter={4}
        sameWidth
        className="popover"
      >
        {options.map(({ value, label }) => (
          <Ariakit.ComboboxItem
            className="combobox-item"
            value={value}
            key={value}
          >
            {label}
          </Ariakit.ComboboxItem>
        ))}
      </Ariakit.ComboboxPopover>
    </Ariakit.ComboboxProvider>
  )
}

Combobox.propTypes = {
  options: PropTypes.array,
  value: PropTypes.string,
  onValueChange: PropTypes.func,
  placeholder: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  disabled: PropTypes.bool,
}
