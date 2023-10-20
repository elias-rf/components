import { TransferenciaModelo } from '@/client/features/controles/components/transferencia-modelo'
import '@/client/features/controles/controles_store.mock'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/transferencia/transferencia-modelo',
}

export const Transferencia_Modelo: Story = () => {
  return <TransferenciaModelo />
}
