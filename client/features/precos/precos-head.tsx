import { Can } from '@/client/components/can'
import { Title } from '@/client/components/ui/title'
import { Permissions } from '@/client/features/permissions'

type TPrecosHeadProps = {
  can: any
  permissions: any
}

export function PrecosHead({ can, permissions }: TPrecosHeadProps) {
  return (
    <div
      data-name="Precos"
      className="flex flex-row my-1 space-x-2"
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
