/**
 * @typedef {Object} FormFieldProps
 * @property {string} [className]
 * @property {React.ReactNode[]} [children]
 */

/**
 * @type {React.FC<FormFieldProps>}
 */
export const FormField = ({ children, className }) => {
  return <div className={className}>{children}</div>
}
