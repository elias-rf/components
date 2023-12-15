import { TransferenciaMensal } from '@/client/pages/industrial/controles/components/transferencia-mensal.js'
import '@/client/pages/industrial/controles/controles_store.mock.js'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/transferencia/transferencia-mensal',
}

export const Transferencia_Mensal: Story = () => {
  return <TransferenciaMensal />
}
