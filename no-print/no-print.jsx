import PropType from 'prop-types'

/**
 * @typedef {Object} NoPrintProps
 * @property {React.ReactElement} [children]
 */

/**
 * @type {React.FC<NoPrintProps>}
 */
export function NoPrint({ children }) {
  return (
    <div
      data-name="NoPrint"
      className="print:hidden"
    >
      {children}
    </div>
  )
}

NoPrint.prototypes = {
  children: PropType.node.isRequired,
}
