import { OperacaoProduto } from '@/client/pages/industrial/controles/components/operacao/operacao-produto.jsx'
import { operacaoStore } from '@/client/pages/industrial/controles/components/operacao/operacao.store.mjs'

const meta = {
  component: OperacaoProduto,
}

export default meta

export const Operacao_Produto = {
  render: () => {
    return <OperacaoProduto store={operacaoStore} />
  },
}
