import { TransferenciaDiario } from './transferencia-diario.jsx'
import { transferenciaStore } from './transferencia.store.mjs'

const meta = {
  component: TransferenciaDiario,
}

export default meta

export const Transferencia_Diario = {
  render: () => {
    return <TransferenciaDiario store={transferenciaStore} />
  },
}
