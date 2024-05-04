import { Permissions } from '../../features/permissions.jsx'
import { cn } from '../utils.mjs'
import { Can } from '../can.jsx'
import { Title } from '../title/title.jsx'

export function FormHead({
  children,
  editPermissions,
  permissions,
  className,
  title,
}) {
  return (
    <div
      data-name="Cliente"
      className={cn('my-1 flex flex-row justify-between', className)}
    >
      <div className="flex space-x-2">
        <Title>{title}</Title>
        <Can can={editPermissions} elseCan={null}>
          <Permissions permissions={permissions} />
        </Can>
      </div>
      <div className="flex">{children}</div>
    </div>
  )
}
