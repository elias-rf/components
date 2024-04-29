import { JsonView } from '@/client/components/json-view/json-view.jsx'
import { OperacaoDiario } from '@/client/pages/industrial/controles/components/operacao/operacao-diario.jsx'
import { operacaoStore } from '@/client/pages/industrial/controles/components/operacao/operacao.store.mjs'

const meta = {
  component: OperacaoDiario,
}

export default meta

// operacaoStore.setMes([['mes', '2020-01']])

export const Operacao_Diario = {
  render: () => {
    const state = operacaoStore.state((state) => state)
    return (
      <>
        <OperacaoDiario store={operacaoStore} />
        <JsonView data={state} />
      </>
    )
  },
}
