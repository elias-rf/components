import { TransferenciaDiario } from './components/transferencia-diario.js'
import { TransferenciaMensal } from './components/transferencia-mensal.js'
import { TransferenciaModelo } from './components/transferencia-modelo.js'

export function Transferencia() {
  return (
    <div className={'p-2 w-full'}>
      <TransferenciaMensal>
        <div className={'p-1 mb-4 border-2 border-gray-300'}>
          <TransferenciaDiario>
            <div className={'p-1 mb-4 border-2 border-gray-300'}>
              <TransferenciaModelo />
            </div>
          </TransferenciaDiario>
        </div>
      </TransferenciaMensal>
    </div>
  )
}