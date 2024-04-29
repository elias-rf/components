import { TransferenciaModelo } from './transferencia-modelo.jsx'
import { transferenciaStore } from './transferencia.store.mjs'

const meta = {
  component: TransferenciaModelo,
}

export default meta

export const Transferencia_Modelo = {
  render: () => {
    return <TransferenciaModelo store={transferenciaStore} />
  },
}
