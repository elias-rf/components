export function Can({ children, can, elseCan }) {
  if (can) return <>{children}</>
  if (elseCan !== undefined) return <>{elseCan}</>
  return <div>Não autorizado!</div>
}
