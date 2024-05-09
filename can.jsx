/**
 * A React component that conditionally renders its children or an alternative component based on the provided `can` and `elseCan` props.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered if the `can` prop is truthy.
 * @param {boolean} props.can - A boolean indicating whether the `children` should be rendered.
 * @param {React.ReactNode} [props.elseCan] - An optional alternative component to be rendered if the `can` prop is falsy.
 * @returns {React.ReactElement} - The rendered content based on the `can` and `elseCan` props.
 */
export function Can({ children, can, elseCan }) {
  if (can) return <>{children}</>
  if (elseCan !== undefined) return <>{elseCan}</>
  return <div>Não autorizado!</div>
}
