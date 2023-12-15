import { Can } from '@/client/components/can.js'
import { Title } from '@/client/components/ui/title.js'
import { Permissions } from '@/client/features/permissions.js'

type TControlesHeadProps = {
  can: any
  permissions: any
}

export function ControlesHead({ can, permissions }: TControlesHeadProps) {
  return (
    <div
      data-name="Cliente"
      className="flex flex-row my-1 space-x-2"
    >
      <Title>Controles de Produção</Title>
      <Can
        can={can('controles_permissao')}
        elseCan={null}
      >
        <Permissions permissions={permissions} />
      </Can>
    </div>
  )
}
