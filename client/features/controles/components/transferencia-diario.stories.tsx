import { TransferenciaDiario } from '@/client/features/controles/components/transferencia-diario'
import '@/client/features/controles/controles_store.mock'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/transferencia/transferencia-diario',
}

export const Transferencia_Diario: Story = () => {
  return <TransferenciaDiario />
}
