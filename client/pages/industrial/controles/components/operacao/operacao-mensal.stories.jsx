import { JsonView } from '@/client/components/json-view/json-view.jsx'
import { OperacaoMensal } from '@/client/pages/industrial/controles/components/operacao/operacao-mensal.jsx'
import { operacaoStore } from '@/client/pages/industrial/controles/components/operacao/operacao.store.mjs'

const meta = {
  component: OperacaoMensal,
}

export default meta

export const Default = {
  render: () => {
    const state = operacaoStore.state((state) => state)

    return (
      <>
        <OperacaoMensal store={operacaoStore} />
        <JsonView data={state} />
      </>
    )
  },
}
