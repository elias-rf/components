import { TSelection } from '@/types'
import { day } from '@/utils/date/day'
import { getFieldId } from '@/utils/query/get-field-id'
import React from 'react'
import { EsterilizacaoExternaDiario } from './components/est-ext-diario'
import { EsterilizacaoExternaMensal } from './components/est-ext-mensal'
import { EsterilizacaoExternaModelo } from './components/est-ext-modelo'
import { EsterilizacaoExternaProduto } from './components/est-ext-produto'

type EsterilizacaoExternaProp = {
  dia?: string
  onState?: (event: any) => void
}

export function EstExt({ onState, dia }: EsterilizacaoExternaProp) {
  const [mesCorrente, setMesCorrente] = React.useState<['mes', string][]>([])
  const [diaCorrente, setDiaCorrente] = React.useState<['dia', string][]>([])
  const [produtoCorrente, setProdutoCorrente] = React.useState<
    ['produto', string][]
  >([])

  const mesInicial: ['mes', string][] = [
    ['mes', day(dia).subtract(13, 'month').format('YYYY-MM')],
  ]

  function handleOnChangeMensal(event: TSelection<any>) {
    if (
      getFieldId('mes', event) &&
      getFieldId('mes', event) === getFieldId('mes', mesCorrente)
    ) {
      return setMesCorrente([])
    }
    setMesCorrente([['mes', getFieldId('mes', event)]])
  }

  function handleOnChangeDiario(event: TSelection<any>) {
    if (
      getFieldId('dia', event) &&
      getFieldId('dia', event) === getFieldId('dia', diaCorrente)
    ) {
      return setDiaCorrente([])
    }
    setDiaCorrente([['dia', getFieldId('dia', event)]])
  }

  function handleOnChangeProduto(event: TSelection<any>) {
    if (
      getFieldId('produto', event) &&
      getFieldId('produto', event) === getFieldId('produto', produtoCorrente)
    ) {
      return setProdutoCorrente([])
    }
    setProdutoCorrente([['produto', getFieldId('produto', event)]])
  }

  React.useEffect(() => {
    onState && onState({ mesCorrente, diaCorrente, produtoCorrente })
  }, [onState, mesCorrente, diaCorrente, produtoCorrente])

  return (
    <div className={'p-2 w-full'}>
      <EsterilizacaoExternaMensal
        mesInicial={mesInicial}
        mesCorrente={mesCorrente}
        onSelection={handleOnChangeMensal}
      >
        <div className={'p-1 mb-4 border-2 border-gray-300'}>
          <EsterilizacaoExternaDiario
            mesCorrente={mesCorrente}
            diaCorrente={diaCorrente}
            onSelection={handleOnChangeDiario}
          >
            <div className={'p-1 mb-4 border-2 border-gray-300'}>
              <EsterilizacaoExternaProduto
                diaCorrente={diaCorrente}
                produtoCorrente={produtoCorrente}
                onSelection={handleOnChangeProduto}
              >
                <EsterilizacaoExternaModelo
                  diaCorrente={diaCorrente}
                  produtoCorrente={produtoCorrente}
                ></EsterilizacaoExternaModelo>
              </EsterilizacaoExternaProduto>
            </div>
          </EsterilizacaoExternaDiario>
        </div>
      </EsterilizacaoExternaMensal>
    </div>
  )
}
