import { OperacaoProduto } from '@/client/features/controles/components/operacao-produto'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/operacao/operacao-produto',
}

export const Operacao_Produto: Story = () => {
  return (
    <OperacaoProduto
      operacao={[['operacao', '3058']]}
      dia={[['dia', '2020-01-01']]}
      produtoCorrente={[['produto', 'cat1']]}
      onSelect={(event: any) => console.log(event)}
    />
  )
}
