import { Can } from '@/client/components/can.js'
import { FormHead } from '@/client/components/ui/form-head.js'
import { Tabs } from '@/client/components/ui/tabs/tabs.js'
import { EstExt } from '@/client/pages/industrial/controles/est-ext.js'
import { EstInt } from '@/client/pages/industrial/controles/est-int.js'
import { Operacao } from '@/client/pages/industrial/controles/operacao.js'
import { Transferencia } from '@/client/pages/industrial/controles/transferencia.js'
import { authStore } from '@/client/store/auth_store.js'
import { useState } from 'react'

const permissions = {
  industrial_controles_permissao:
    'Atribuir permissões para controles de produção',
  industrial_controles_read: 'Visualizar controles de produção',
}

type TCan = (name: keyof typeof permissions) => boolean

export default function Controles() {
  const [select, setSelect] = useState('profile')
  const can: TCan = authStore.use.can()

  return (
    <Can can={can('industrial_controles_read')}>
      <FormHead
        editPermissions={can('industrial_controles_permissao')}
        permissions={permissions}
      >
        Controles de Produção
      </FormHead>
      <Tabs
        selected={select}
        onChange={setSelect}
      >
        <Tabs.Tab
          name="operacao"
          label="Operação"
        >
          <Operacao />
        </Tabs.Tab>
        <Tabs.Tab
          name="estint"
          label="Esterilização Int"
        >
          <EstInt />
        </Tabs.Tab>
        <Tabs.Tab
          name="estext"
          label="Esterilização Ext"
        >
          <EstExt />
        </Tabs.Tab>
        <Tabs.Tab
          name="transferencia"
          label="Transferência"
        >
          <Transferencia />
        </Tabs.Tab>
      </Tabs>
    </Can>
  )
}