import { Can } from '@/client/components/can.js'
import { Title } from '@/client/components/ui/title.js'
import { Permissions } from '@/client/features/permissions.js'
import { cn } from '@/client/lib/cn.js'

type TPrecosHeadProps = {
  can: any
  permissions: any
  className?: string
}

export function PrecosHead({ can, permissions, className }: TPrecosHeadProps) {
  return (
    <div
      data-name="Precos"
      className={cn('flex flex-row my-1 space-x-2', className)}
    >
      <Title>Preços</Title>
      <Can
        can={can('precos_permissao')}
        response={null}
      >
        <Permissions permissions={permissions} />
      </Can>
    </div>
  )
}
