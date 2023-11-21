import { Can } from '@/client/components/can.js'
import { Title } from '@/client/components/ui/title.js'
import { Permissions } from '@/client/features/permissions.js'

type TClienteHeadProps = {
  can: any
  permissions: any
}

export function ClienteHead({ can, permissions }: TClienteHeadProps) {
  return (
    <div
      data-name="Cliente"
      className="flex flex-row my-1 space-x-2"
    >
      <Title>Histórico do cliente</Title>
      <Can
        can={can('cliente_permissao')}
        response={null}
      >
        <Permissions permissions={permissions} />
      </Can>
    </div>
  )
}
