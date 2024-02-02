import { Can } from '@/client/components/can.js'
import { Title } from '@/client/components/title/title.js'
import { Permissions } from '@/client/features/permissions.js'
import { cn } from '@/client/lib/utils.js'
import { TPermissions } from '@/types/index.js'

type TFormHeadProps = {
  permissions: TPermissions
  editPermissions: boolean
  className?: string
  children?: React.ReactNode
  title: string
}

export function FormHead({
  children,
  editPermissions,
  permissions,
  className,
  title,
}: TFormHeadProps) {
  return (
    <div
      data-name="Cliente"
      className={cn('my-1 flex flex-row justify-between', className)}
    >
      <div className="flex space-x-2">
        <Title>{title}</Title>
        <Can
          can={editPermissions}
          elseCan={null}
        >
          <Permissions permissions={permissions} />
        </Can>
      </div>
      <div className="flex">{children}</div>
    </div>
  )
}
