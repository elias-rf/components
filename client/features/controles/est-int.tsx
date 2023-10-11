import { TSelection } from '@/types'
import { day } from '@/utils/date/day'
import { getFieldId } from '@/utils/query/get-field-id'
import { Box } from '@mui/material'
import React from 'react'
import { EsterilizacaoInternaDiario } from './components/est-int-diario'
import { EsterilizacaoInternaMensal } from './components/est-int-mensal'
import { EsterilizacaoInternaModelo } from './components/est-int-modelo'
import { EsterilizacaoInternaProduto } from './components/est-int-produto'

type EsterilizacaoInternaProp = {
  dia?: string
  onState?: (event: any) => void
}

export function EstInt({ onState, dia }: EsterilizacaoInternaProp) {
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
      <EsterilizacaoInternaMensal
        mesInicial={mesInicial}
        mesCorrente={mesCorrente}
        onSelection={handleOnChangeMensal}
      >
        <Box
          sx={{
            mb: 4,
            p: 1,
            border: '2px solid rgba(25, 118, 210, 0.2)',
          }}
        >
          <EsterilizacaoInternaDiario
            mesCorrente={mesCorrente}
            diaCorrente={diaCorrente}
            onSelection={handleOnChangeDiario}
          >
            <Box
              sx={{
                mb: 4,
                p: 1,
                border: '2px solid rgba(25, 118, 210, 0.2)',
              }}
            >
              <EsterilizacaoInternaProduto
                diaCorrente={diaCorrente}
                produtoCorrente={produtoCorrente}
                onSelection={handleOnChangeProduto}
              >
                <EsterilizacaoInternaModelo
                  diaCorrente={diaCorrente}
                  produtoCorrente={produtoCorrente}
                ></EsterilizacaoInternaModelo>
              </EsterilizacaoInternaProduto>
            </Box>
          </EsterilizacaoInternaDiario>
        </Box>
      </EsterilizacaoInternaMensal>
    </div>
  )
}
