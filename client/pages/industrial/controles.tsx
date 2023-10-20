import { Tabs } from '@/client/components/ui/tabs'
import { Title } from '@/client/components/ui/title'
import { EstExt } from '@/client/features/controles/est-ext'
import { EstInt } from '@/client/features/controles/est-int'
import { Operacao } from '@/client/features/controles/operacao'
import { Transferencia } from '@/client/features/controles/transferencia'
import { useState } from 'react'

const tabs = [
  { label: 'Operação', value: 'operacao' },
  { label: 'Esterilização Int', value: 'estint' },
  { label: 'Esterilização Ext', value: 'estext' },
  { label: 'Transferência', value: 'transferencia' },
]

export default function Controles() {
  const [select, setSelect] = useState('profile')

  return (
    <>
      <Title>Controle de Produção</Title>
      <Tabs
        value={select}
        tabs={tabs}
        onChange={setSelect}
      />
      {select === 'operacao' && <Operacao />}

      {select === 'estint' && <EstInt />}

      {select === 'estext' && <EstExt />}

      {select === 'transferencia' && <Transferencia />}
    </>
  )
}
