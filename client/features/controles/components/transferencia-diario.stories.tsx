import { TransferenciaDiario } from '@/client/features/controles/components/transferencia-diario'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/transferencia/transferencia-diario',
}

export const Transferencia_Diario: Story = () => {
  return (
    <TransferenciaDiario
      mesCorrente={[['mes', '2020-01']]}
      diaCorrente={[['dia', '2020-01-01']]}
    />
  )
}