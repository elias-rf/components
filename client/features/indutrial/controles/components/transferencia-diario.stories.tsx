import { TransferenciaDiario } from '@/client/features/indutrial/controles/components/transferencia-diario.js'
import '@/client/features/indutrial/controles/controles_store.mock.js'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/transferencia/transferencia-diario',
}

export const Transferencia_Diario: Story = () => {
  return <TransferenciaDiario />
}
