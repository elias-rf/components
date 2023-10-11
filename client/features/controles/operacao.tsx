import { Select } from '@/client/components/ui/select'
import { TSelection } from '@/types'
import { day } from '@/utils/date/day'
import { getFieldId } from '@/utils/query/get-field-id'
import React, { useMemo } from 'react'
import { OperacaoDiario } from './components/operacao-diario'
import { OperacaoMensal } from './components/operacao-mensal'
import { OperacaoModelo } from './components/operacao-modelo'
import { OperacaoProduto } from './components/operacao-produto'
import { OperacaoTurno } from './components/operacao-turno'

type OperacaoProp = {
  dia?: string
  onState?: (event: any) => void
}

export function Operacao({ onState, dia }: OperacaoProp) {
  const [mesCorrente, setMesCorrente] = React.useState<['mes', string][]>([])
  const [diaCorrente, setDiaCorrente] = React.useState<['dia', string][]>([])
  const [produtoCorrente, setProdutoCorrente] = React.useState<
    ['produto', string][]
  >([])
  const [operacaoCorrente, setOperacaoCorrente] = React.useState<
    ['operacao', string][]
  >([['operacao', '3058']])

  const mesInicial: ['mes', string][] = useMemo(
    () => [['mes', day(dia).subtract(13, 'month').format('YYYY-MM')]],
    [dia]
  )

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
      setDiaCorrente([])
      return
    }
    setDiaCorrente([['dia', getFieldId('dia', event)]])
  }

  function handleOnChangeProduto(event: TSelection<any>) {
    if (
      getFieldId('produto', event) &&
      getFieldId('produto', event) === getFieldId('produto', produtoCorrente)
    ) {
      setProdutoCorrente([])
      return
    }
    setProdutoCorrente([['produto', getFieldId('produto', event)]])
  }

  function handleSelect(value: string) {
    setOperacaoCorrente([['operacao', value]])
  }

  React.useEffect(() => {
    onState &&
      onState({
        mesInicial,
        mesCorrente,
        diaCorrente,
        produtoCorrente,
        operacaoCorrente,
      })
  }, [
    onState,
    mesInicial,
    mesCorrente,
    diaCorrente,
    produtoCorrente,
    operacaoCorrente,
  ])

  return (
    <>
      <div className={'mb-2 max-w-md'}>
        <Select
          label="Operação"
          value={getFieldId('operacao', operacaoCorrente) || ''}
          onChange={handleSelect}
          options={[
            ['1010 - Montagem lado 1', '1010'],
            ['1015 - Torneamento radial', '1015'],
            ['2010 - Montagem lado 2', '2010'],
            ['2018 - Fresagem', '2018'],
            ['2025 - Desmontagem e limpeza', '2025'],
            ['3042 - Inspeção', '3042'],
            ['3045 - Dioptria', '3045'],
            ['3058 - Esterilização a vapor', '3058'],
            ['3065 - Empacotamento', '3065'],
            ['3070 - Inspeção final', '3070'],
          ]}
        />
      </div>
      <OperacaoMensal
        operacao={operacaoCorrente}
        mesInicial={mesInicial}
        mesCorrente={mesCorrente}
        onSelection={handleOnChangeMensal}
      >
        <div className={'mb-4 p-1 border-2 border-gray-200 w-full'}>
          <OperacaoDiario
            operacao={operacaoCorrente}
            mes={mesCorrente}
            diaCorrente={diaCorrente}
            onSelection={handleOnChangeDiario}
          >
            <div className={'mb-4 p-1 border-2 border-gray-200'}>
              <OperacaoProduto
                operacao={operacaoCorrente}
                dia={diaCorrente}
                produtoCorrente={produtoCorrente}
                onSelect={handleOnChangeProduto}
              >
                <OperacaoModelo
                  operacao={operacaoCorrente}
                  dia={diaCorrente}
                  produtoCorrente={produtoCorrente}
                />
              </OperacaoProduto>
              <OperacaoTurno
                operacao={operacaoCorrente}
                dia={diaCorrente}
              ></OperacaoTurno>
            </div>
          </OperacaoDiario>
        </div>
      </OperacaoMensal>
    </>
  )
}
