import { OperacaoProduto } from '@/client/features/indutrial/controles/components/operacao-produto.js'
import '@/client/features/indutrial/controles/controles_store.mock.js'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/operacao/operacao-produto',
}

export const Operacao_Produto: Story = () => {
  return <OperacaoProduto />
}
