import { TransferenciaMensal } from '@/client/features/controles/components/transferencia-mensal'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/transferencia/transferencia-mensal',
}

export const Transferencia_Mensal: Story = () => {
  return (
    <TransferenciaMensal
      mesCorrente={[['mes', '2020-01']]}
      dia="2020-01-01"
    />
  )
}
