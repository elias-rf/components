import { Table } from '@/client/components/table'
import { rpc } from '@/rpc/rpc-client'
import { TSelection } from '@/types'
import { getFieldId } from '@/utils/query/get-field-id'
import React from 'react'
import { operacaoModeloSchema } from './operacao-modelo_schema'

type OperacaoModelProps = {
  operacao: ['operacao', string][]
  dia: ['dia', string][]
  produtoCorrente: ['produto', string][]
  onSelectEvent?: (event: TSelection<any>) => void
  children?: React.ReactNode
}

export function OperacaoModelo({
  operacao,
  dia,
  produtoCorrente,
}: OperacaoModelProps) {
  const [data, setData] = React.useState<
    { modelo: string; quantidade: number }[]
  >([])

  React.useEffect(() => {
    async function getData() {
      const data = await rpc.ordemProducaoOperacao.modelo({
        operacao: getFieldId('operacao', operacao) || '',
        data: getFieldId('dia', dia),
        produto: getFieldId('produto', produtoCorrente),
      })
      setData(data)
    }
    getData()
  }, [dia, produtoCorrente, operacao])

  return (
    <Table
      rows={data}
      columns={operacaoModeloSchema}
    ></Table>
  )
}
