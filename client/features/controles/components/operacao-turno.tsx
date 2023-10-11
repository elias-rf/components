import { Table } from '@/client/components/table'
import { rpc } from '@/rpc/rpc-client'
import { TSelection } from '@/types'
import { getFieldId } from '@/utils/query/get-field-id'
import React from 'react'
import { operacaoTurnoSchema } from './operacao-turno_schema'

type OperacaoTurnoProps = {
  operacao: ['operacao', string][]
  dia: ['dia', string][]
  onSelection?: (event: TSelection<any>) => void
}

export function OperacaoTurno({
  operacao,
  dia,
  onSelection,
}: OperacaoTurnoProps) {
  const [data, setData] = React.useState<
    {
      produto: string
      quantidade: number
    }[]
  >([])

  React.useEffect(() => {
    async function getData() {
      const data = await rpc.ordemProducaoOperacao.turno({
        operacao: getFieldId('operacao', operacao) || '',
        data: getFieldId('dia', dia),
      })
      setData(data)
    }
    getData()
  }, [dia, operacao])

  return (
    <Table
      rows={data}
      columns={operacaoTurnoSchema}
      onSelection={onSelection}
    ></Table>
  )
}
