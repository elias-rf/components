import PropTypes from 'prop-types'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/auth_context.jsx'

/**
 * A React component that conditionally renders its children or an alternative component based on the provided `can` and `elseCan` props.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered if the `can` prop is truthy.
 * @param {string} props.acaoId - A boolean indicating whether the `children` should be rendered.
 * @param {React.ReactNode} [props.elseCan] - An optional alternative component to be rendered if the `can` prop is falsy.
 * @returns {React.ReactElement} - The rendered content based on the `can` and `elseCan` props.
 */
export function Can({ children, acaoId, elseCan }) {
  const authStore = React.useContext(AuthContext)
  if (!authStore.isAuthenticated()) return <Navigate to="/login" />
  if (authStore.can(acaoId)) return <>{children}</>
  if (elseCan !== undefined) return <>{elseCan}</>
  return <div>Não autorizado!</div>
}

Can.propTypes = {
  children: PropTypes.node.isRequired,
  acaoId: PropTypes.string.isRequired,
  elseCan: PropTypes.node,
}
