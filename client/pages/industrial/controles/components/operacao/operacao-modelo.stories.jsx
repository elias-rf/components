import { OperacaoModelo } from '@/client/pages/industrial/controles/components/operacao/operacao-modelo.jsx'
import { operacaoStore } from '@/client/pages/industrial/controles/components/operacao/operacao.store.mjs'

const meta = {
  component: OperacaoModelo,
}

export default meta

export const Operacao_Modelo = {
  render: () => {
    return <OperacaoModelo store={operacaoStore} />
  },
}
