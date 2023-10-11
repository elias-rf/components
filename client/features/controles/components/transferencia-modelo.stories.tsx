import { TransferenciaModelo } from '@/client/features/controles/components/transferencia-modelo'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/transferencia/transferencia-modelo',
}

export const Transferencia_Modelo: Story = () => {
  return <TransferenciaModelo diaCorrente={[['dia', '2020-01-01']]} />
}
