import { OperacaoProduto } from '@/client/features/controles/components/operacao-produto'
import '@/client/features/controles/controles_store.mock'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/operacao/operacao-produto',
}

export const Operacao_Produto: Story = () => {
  return <OperacaoProduto />
}
