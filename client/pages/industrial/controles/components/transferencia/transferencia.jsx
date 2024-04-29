import { transferenciaStore } from '../../../../../pages/industrial/controles/components/transferencia/transferencia.store.mjs'
import { TransferenciaDiario } from './transferencia-diario.jsx'
import { TransferenciaMensal } from './transferencia-mensal.jsx'
import { TransferenciaModelo } from './transferencia-modelo.jsx'

export function Transferencia() {
  return (
    <div className={'w-full p-2'}>
      <TransferenciaMensal store={transferenciaStore}>
        <div className={'border-2 border-gray-300 p-4 '}>
          <TransferenciaDiario store={transferenciaStore}>
            <div className={'border-2 border-gray-300 p-4 '}>
              <TransferenciaModelo store={transferenciaStore} />
            </div>
          </TransferenciaDiario>
        </div>
      </TransferenciaMensal>
    </div>
  )
}
