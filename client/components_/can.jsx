import Page403 from '../pages/page_403.jsx'

export function Can({ children, can, elseCan }) {
  if (can) return <>{children}</>
  if (elseCan !== undefined) return <>{elseCan}</>
  return <Page403 />
}
