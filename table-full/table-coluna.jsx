import PropTypes from 'prop-types'
import { cn } from '../lib/utils.mjs'

const align = {
  left: 'text-left',
  right: 'text-right',
  center: 'text-center',
  justify: 'text-justify',
}

/**
 * Renders a table column with specified attributes.
 * @param {Object} props - The component props.
 * @param {{name:string, align?:string, width?:string}} props.coluna - The column object containing alignment, name, and width.
 * @param {React.ReactNode} props.children - The content to render within the table column.
 * @return {JSX.Element} The JSX element representing the table column.
 */
export const TableColuna = ({ coluna, children }) => {
  return (
    <td
      className={cn('p-1.5', coluna.align && align[coluna.align])}
      key={coluna.name}
      style={{ width: coluna.width }}
    >
      {children}
    </td>
  )
}

TableColuna.propTypes = {
  children: PropTypes.node,
  coluna: PropTypes.object,
}
