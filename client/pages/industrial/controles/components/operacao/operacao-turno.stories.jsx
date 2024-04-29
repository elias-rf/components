import { OperacaoTurno } from './operacao-turno.jsx'
import { operacaoStore } from './operacao.store.mjs'

const meta = {
  component: OperacaoTurno,
}

export default meta

export const Default = {
  render: () => {
    return <OperacaoTurno store={operacaoStore} />
  },
}
