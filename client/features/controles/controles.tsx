import { Title } from '@/client/components/ui/title'
import { Tabs } from 'flowbite-react'
import { EstExt } from './est-ext'
import { EstInt } from './est-int'
import { Operacao } from './operacao'
import { Transferencia } from './transferencia'

export function Controles() {
  return (
    <>
      <Title>Controle de Produção</Title>
      <Tabs.Group style="default">
        <Tabs.Item title="Operação">
          <Operacao />
        </Tabs.Item>
        <Tabs.Item title="Esterilização Int">
          <EstInt />
        </Tabs.Item>
        <Tabs.Item title="Esterilização Ext">
          <EstExt />
        </Tabs.Item>
        <Tabs.Item title="Transferência">
          <Transferencia />
        </Tabs.Item>
      </Tabs.Group>
    </>
  )
}
