import { Can } from '@/client/components/can.js'
import { Title } from '@/client/components/ui/title.js'
import { Permissions } from '@/client/features/permissions.js'
import { cn } from '@/client/lib/cn.js'

type TVendas30DiasHeadProps = {
  can: any
  permissions: any
  className?: string
}

export function Vendas30DiasHead({
  can,
  permissions,
  className,
}: TVendas30DiasHeadProps) {
  return (
    <div
      data-name="Vendas 30 dias"
      className={cn('flex flex-row my-1 space-x-2', className)}
    >
      <Title>Vendas 30 dias</Title>
      <Can
        can={can('vendas-30dias_permissao')}
        elseCan={null}
      >
        <Permissions permissions={permissions} />
      </Can>
    </div>
  )
}
