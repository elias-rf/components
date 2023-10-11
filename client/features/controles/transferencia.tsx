import { TId } from '@/types'
import { getFieldId } from '@/utils/query/get-field-id'
import React from 'react'
import { TransferenciaDiario } from './components/transferencia-diario'
import { TransferenciaMensal } from './components/transferencia-mensal'
import { TransferenciaModelo } from './components/transferencia-modelo'

type TransferenciaProp = {
  dia?: string
  onState?: (event: any) => void
}

export function Transferencia({ onState, dia }: TransferenciaProp) {
  const [mesCorrente, setMesCorrente] = React.useState<TId<'mes'>>([])
  const [diaCorrente, setDiaCorrente] = React.useState<TId<'dia'>>([])

  function handleOnChangeMensal(event: TId<'mes'>) {
    if (
      getFieldId('mes', event) &&
      getFieldId('mes', event) === getFieldId('mes', mesCorrente)
    ) {
      return setMesCorrente([])
    }
    setMesCorrente([['mes', getFieldId('mes', event)]])
  }

  function handleOnChangeDiario(event: TId<'dia'>) {
    if (
      getFieldId('dia', event) &&
      getFieldId('dia', event) === getFieldId('dia', diaCorrente)
    ) {
      return setDiaCorrente([])
    }
    setDiaCorrente([['dia', getFieldId('dia', event)]])
  }

  React.useEffect(() => {
    onState && onState({ mesCorrente, diaCorrente })
  }, [onState, mesCorrente, diaCorrente])

  return (
    <div className={'p-2 w-full'}>
      <TransferenciaMensal
        mesCorrente={mesCorrente}
        dia={dia}
        onSelectEvent={handleOnChangeMensal}
      >
        <div className={'p-1 mb-4 border-2 border-gray-300'}>
          <TransferenciaDiario
            onSelect={handleOnChangeDiario}
            diaCorrente={diaCorrente}
            mesCorrente={mesCorrente}
          >
            <div className={'p-1 mb-4 border-2 border-gray-300'}>
              <TransferenciaModelo diaCorrente={diaCorrente} />
            </div>
          </TransferenciaDiario>
        </div>
      </TransferenciaMensal>
    </div>
  )
}
