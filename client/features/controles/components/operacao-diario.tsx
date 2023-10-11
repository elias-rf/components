import { Table } from '@/client/components/table'
import { rpc } from '@/rpc/rpc-client'
import { TSelection } from '@/types'
import { day } from '@/utils/date/day'
import { getFieldId } from '@/utils/query/get-field-id'
import React from 'react'
import { operacaoDiarioSchema } from './operacao-diario_schema'

type OperacaoDiarioProp = {
  operacao: ['operacao', string][]
  mes: ['mes', string][]
  diaCorrente: ['dia', string][]
  onSelection: (event: TSelection<any>) => void
  children?: React.ReactNode
}

export function OperacaoDiario({
  operacao,
  mes,
  diaCorrente,
  children,
  onSelection,
}: OperacaoDiarioProp) {
  const [data, setData] = React.useState<
    {
      dia: string
      diaSemana: string
      quantidade: number
    }[]
  >([])

  React.useEffect(() => {
    async function getData() {
      const data = await rpc.ordemProducaoOperacao.diario({
        operacao: getFieldId('operacao', operacao) || '',
        inicio: day(getFieldId('mes', mes) + '-01')
          .startOf('month')
          .format('YYYY-MM-DD'),
        fim: day(getFieldId('mes', mes) + '-01')
          .endOf('month')
          .format('YYYY-MM-DD'),
      })
      setData(data)
    }
    getData()
  }, [mes, operacao])

  return (
    <Table
      rows={data || []}
      columns={operacaoDiarioSchema}
      selection={diaCorrente}
      onSelection={onSelection}
      getId={(rec: any) => [['dia', rec.dia]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
