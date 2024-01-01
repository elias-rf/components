import { Can } from '@/client/components/can.js'
import { Title } from '@/client/components/ui-old/title.js'
import { Permissions } from '@/client/features/permissions.js'

type TFormHeadProps = {
  permissions: { [permission: string]: string }
  editPermissions: boolean
  className?: string
  children: React.ReactNode
}

export function FormHead({
  children,
  editPermissions,
  permissions,
}: TFormHeadProps) {
  return (
    <div
      data-name="Cliente"
      className="my-1 flex flex-row space-x-2"
    >
      <Title>{children}</Title>
      <Can
        can={editPermissions}
        elseCan={null}
      >
        <Permissions permissions={permissions} />
      </Can>
    </div>
  )
}
