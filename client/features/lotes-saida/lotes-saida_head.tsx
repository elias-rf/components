import { Can } from '@/client/components/can'
import { Title } from '@/client/components/ui/title'
import { Permissions } from '@/client/features/permissions'

type TClienteHeadProps = {
  can: any
  permissions: any
}

export function LotesSaidaHead({ can, permissions }: TClienteHeadProps) {
  return (
    <div
      data-name="Cliente"
      className="flex flex-row my-1 space-x-2"
    >
      <Title>Rastreamento de produtos</Title>
      <Can
        can={can.cliente_permissao}
        response={null}
      >
        <Permissions permissions={permissions} />
      </Can>
    </div>
  )
}
