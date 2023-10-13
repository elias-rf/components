import { Title } from '@/client/components/ui/title'
import { EstExt } from '@/client/features/controles/est-ext'
import { EstInt } from '@/client/features/controles/est-int'
import { Operacao } from '@/client/features/controles/operacao'
import { Transferencia } from '@/client/features/transferencia/transferencia'
import { Tabs } from 'flowbite-react'

export default function Controles() {
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
