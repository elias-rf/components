import { transferenciaStore } from '@/client/pages/industrial/controles/components/transferencia/transferencia.store.js'
import { TransferenciaDiario } from './transferencia-diario.js'
import { TransferenciaMensal } from './transferencia-mensal.js'
import { TransferenciaModelo } from './transferencia-modelo.js'

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
