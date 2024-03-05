import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/form-head/form-head.js'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/client/components/tabs/tabs.js'
import { EstExt } from '@/client/pages/industrial/controles/components/est-ext/est-ext.js'
import { EstInt } from '@/client/pages/industrial/controles/components/est-int/est-int.js'
import { Operacao } from '@/client/pages/industrial/controles/components/operacao/operacao.js'
import { Transferencia } from '@/client/pages/industrial/controles/components/transferencia/transferencia.js'
import { authStore } from '@/client/store/auth_store.js'
import { useQuery } from '@tanstack/react-query'
import { permissions } from './components/constants.js'

const permissionsList = Object.values(permissions).map(
  (permission) => permission.key
)

export default function Controles() {
  const currentUser = authStore.state.use.currentUser()
  const canList = useQuery({
    queryKey: ['canList'],
    queryFn: () =>
      authStore.canList(currentUser.grupoIds || '', permissionsList),
  })

  return (
    <Can can={canList.data?.[permissions.READ.key]}>
      <FormHead
        editPermissions={canList.data?.[permissions.PERMISSAO.key] || false}
        permissions={permissions}
        title="Controles de Produção"
      ></FormHead>
      <Tabs defaultValue="profile">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="operacao">Operação</TabsTrigger>
          <TabsTrigger value="estint">Esterilização Int</TabsTrigger>
          <TabsTrigger value="estext">Esterilização Ext</TabsTrigger>
          <TabsTrigger value="transferencia">Transferência</TabsTrigger>
        </TabsList>
        <TabsContent value="operacao">
          <Operacao />
        </TabsContent>
        <TabsContent value="estint">
          <EstInt />
        </TabsContent>
        <TabsContent value="estext">
          <EstExt />
        </TabsContent>
        <TabsContent value="transferencia">
          <Transferencia />
        </TabsContent>
      </Tabs>
    </Can>
  )
}
