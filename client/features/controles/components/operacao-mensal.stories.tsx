import { OperacaoMensal } from '@/client/features/controles/components/operacao-mensal'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/operacao/operacao-mensal',
}

export const Default: Story = () => {
  return (
    <OperacaoMensal
      operacao={[['operacao', '3059']]}
      mesInicial={[['mes', '2020-01']]}
      mesCorrente={[['mes', '2020-01']]}
    />
  )
}
