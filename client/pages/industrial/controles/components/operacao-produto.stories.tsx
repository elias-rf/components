import { OperacaoProduto } from '@/client/pages/industrial/controles/components/operacao-produto.js'
import '@/client/pages/industrial/controles/controles_store.mock.js'
import { Story } from '@ladle/react'

export default {
  title: 'features/controles/operacao/operacao-produto',
}

export const Operacao_Produto: Story = () => {
  return <OperacaoProduto />
}
