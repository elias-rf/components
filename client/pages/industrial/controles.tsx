import { Tabs } from '@/client/components/ui/tabs/tabs'
import { Title } from '@/client/components/ui/title'
import { EstExt } from '@/client/features/controles/est-ext'
import { EstInt } from '@/client/features/controles/est-int'
import { Operacao } from '@/client/features/controles/operacao'
import { Transferencia } from '@/client/features/controles/transferencia'
import { useState } from 'react'

export default function Controles() {
  const [select, setSelect] = useState('profile')

  return (
    <>
      <Title>Controle de Produção</Title>
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
    </>
  )
}
