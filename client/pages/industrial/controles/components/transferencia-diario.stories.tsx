import { TransferenciaDiario } from '@/client/pages/industrial/controles/components/transferencia-diario.js'
import '@/client/pages/industrial/controles/controles_store.mock.js'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/transferencia/transferencia-diario',
}

export const Transferencia_Diario: Story = () => {
  return <TransferenciaDiario />
}
