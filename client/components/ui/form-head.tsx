import { Can } from '@/client/components/can.js'
import { Title } from '@/client/components/ui/title.js'
import { Permissions } from '@/client/features/permissions.js'

type TFormHeadProps = {
  permissions: { [permission: string]: string }
  editPermissions: boolean
  className?: string
  title: string
}

export function FormHead({
  title,
  editPermissions,
  permissions,
}: TFormHeadProps) {
  return (
    <div
      data-name="Cliente"
      className="flex flex-row my-1 space-x-2"
    >
      <Title>{title}</Title>
      <Can
        can={editPermissions}
        elseCan={null}
      >
        <Permissions permissions={permissions} />
      </Can>
    </div>
  )
}
