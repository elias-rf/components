import { TransferenciaMensal } from './transferencia-mensal.jsx'
import { transferenciaStore } from './transferencia.store.mjs'

const meta = {
  component: TransferenciaMensal,
}

export default meta

export const Transferencia_Mensal = {
  render: () => {
    return <TransferenciaMensal store={transferenciaStore} />
  },
}
