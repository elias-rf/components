import { Can } from '@/client/components/can.js'
import { Title } from '@/client/components/ui/title.js'
import { Permissions } from '@/client/features/permissions.js'

type TTransferenciaHeadProps = {
  can: any
  permissions: any
}

export function TransferenciaHead({
  can,
  permissions,
}: TTransferenciaHeadProps) {
  return (
    <div
      data-name="Transferencia"
      className="flex flex-row my-1 space-x-2"
    >
      <Title>Transferências para Filial</Title>
      <Can
        can={can('transferencia_permissao')}
        elseCan={null}
      >
        <Permissions permissions={permissions} />
      </Can>
    </div>
  )
}
