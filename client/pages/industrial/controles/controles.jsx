import { useQuery } from '@tanstack/react-query'
import { Can } from '../../../components/can.jsx'
import { FormHead } from '../../../components/form-head/form-head.jsx'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../../components/tabs/tabs.jsx'
import { EstExt } from '../../../pages/industrial/controles/components/est-ext/est-ext.jsx'
import { EstInt } from '../../../pages/industrial/controles/components/est-int/est-int.jsx'
import { Operacao } from '../../../pages/industrial/controles/components/operacao/operacao.jsx'
import { Transferencia } from '../../../pages/industrial/controles/components/transferencia/transferencia.jsx'
import { authStore } from '../../../store/auth_store.mjs'
import { permissions } from './components/constants.mjs'

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
