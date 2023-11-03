import { Can } from '@/client/components/can'
import { ClienteForm } from '@/client/features/cliente/cliente_form'
import { ClienteHead } from '@/client/features/cliente/cliente_head'
import { clienteStore } from '@/client/features/cliente/cliente_store'
import { ClienteTable } from '@/client/features/cliente/cliente_table'
import { Loading } from '@/client/pages/loading'
import { authStore } from '@/client/store/auth_store'
import { rpc } from '@/rpc/rpc-client'
import { useState } from 'react'
import { useEffectOnce } from 'usehooks-ts'

const permissions = {
  cliente_permissao: 'Atribuir permissões do cliente',
  cliente_read: 'Visualizar dados do cliente próprio',
  cliente_read_all: 'Visualizar dados de todos os cliente',
}
type TPermissions = keyof typeof permissions
type TCan = { [prm in TPermissions]: boolean }

export default function Clientes() {
  const status = clienteStore.use.status()
  const [can, setCan] = useState<Partial<TCan>>()
  const idGroups = authStore.use.user()?.group_ids

  useEffectOnce(() => {
    async function getData() {
      const data = await rpc.groupSubject.listPermissions({
        idGroup: idGroups || '',
        idSubjectList: Object.keys(permissions),
      })
      const can = data.reduce(
        (acc, cur) => ({ ...acc, [cur.idSubject]: true }),
        {}
      ) as TCan
      setCan(can)
    }
    getData()
  })

  if (can === undefined) return <Loading />

  return (
    <Can can={can.cliente_read || can.cliente_read_all}>
      <ClienteHead
        can={can}
        permissions={permissions}
      />
      <div className="border border-gray-400 dark:border-gray-500">
        <ClienteTable />
      </div>
      {status !== 'none' ? (
        <div className="p-1 mb-2 border border-gray-400 dark:border-gray-500">
          <ClienteForm />
        </div>
      ) : null}
    </Can>
  )
}
