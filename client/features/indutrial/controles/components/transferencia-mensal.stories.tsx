import { TransferenciaMensal } from '@/client/features/indutrial/controles/components/transferencia-mensal.js'
import '@/client/features/indutrial/controles/controles_store.mock.js'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/transferencia/transferencia-mensal',
}

export const Transferencia_Mensal: Story = () => {
  return <TransferenciaMensal />
}
