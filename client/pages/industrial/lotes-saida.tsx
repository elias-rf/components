import { Can } from '@/client/components/can'
import { LotesSaidaHead } from '@/client/features/lotes-saida/lotes-saida_head'
import { LotesSaidaTable } from '@/client/features/lotes-saida/lotes-saida_table'
import { Loading } from '@/client/pages/loading'
import { authStore } from '@/client/store/auth_store'
import { rpc } from '@/rpc/rpc-client'
import { useState } from 'react'
import { useEffectOnce } from 'usehooks-ts'

const permissions = {
  lotes_saida_permissao: 'Atribuir permissões do cliente',
  lotes_saida_read: 'Visualizar dados do cliente próprio',
}

type TPermissions = keyof typeof permissions
type TCan = { [prm in TPermissions]: boolean }

export default function Clientes() {
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
    <Can can={can.lotes_saida_read}>
      <LotesSaidaHead
        can={can}
        permissions={permissions}
      />
      <div className="border border-gray-400 dark:border-gray-500">
        <LotesSaidaTable />
      </div>
    </Can>
  )
}
