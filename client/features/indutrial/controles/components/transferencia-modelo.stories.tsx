import { TransferenciaModelo } from '@/client/features/indutrial/controles/components/transferencia-modelo.js'
import '@/client/features/indutrial/controles/controles_store.mock.js'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/transferencia/transferencia-modelo',
}

export const Transferencia_Modelo: Story = () => {
  return <TransferenciaModelo />
}
