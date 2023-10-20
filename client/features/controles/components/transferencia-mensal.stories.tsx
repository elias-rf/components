import { TransferenciaMensal } from '@/client/features/controles/components/transferencia-mensal'
import '@/client/features/controles/controles_store.mock'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/transferencia/transferencia-mensal',
}

export const Transferencia_Mensal: Story = () => {
  return <TransferenciaMensal />
}
