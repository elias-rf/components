import { OperacaoModelo } from '@/client/features/controles/components/operacao-modelo'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/operacao/operacao-modelo',
}

export const Operacao_Modelo: Story = () => {
  return (
    <OperacaoModelo
      operacao={[['operacao', '3058']]}
      dia={[['dia', '2020-01-01']]}
      produtoCorrente={[['produto', 'cat1']]}
      onSelectEvent={(event: any) => console.log(event)}
    />
  )
}
