import { TransferenciaModelo } from '@/client/pages/industrial/controles/components/transferencia-modelo.js'
import '@/client/pages/industrial/controles/controles_store.mock.js'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/transferencia/transferencia-modelo',
}

export const Transferencia_Modelo: Story = () => {
  return <TransferenciaModelo />
}
