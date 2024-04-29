import PropType from 'prop-types'

/**
 * Renders a component that hides its content when printed.
 *
 * @param {JSX.Element} children - The content to be rendered inside the component.
 * @return {JSX.Element} The rendered component with hidden print styling.
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
