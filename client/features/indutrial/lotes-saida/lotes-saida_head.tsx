import { Can } from '@/client/components/can.js'
import { Title } from '@/client/components/ui/title.js'
import { Permissions } from '@/client/features/permissions.js'

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
        can={can('lotes_saida_permissao')}
        elseCan={null}
      >
        <Permissions permissions={permissions} />
      </Can>
    </div>
  )
}
