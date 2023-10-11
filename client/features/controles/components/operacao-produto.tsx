import { Table } from '@/client/components/table'
import { rpc } from '@/rpc/rpc-client'
import { TSelection } from '@/types'
import { getFieldId } from '@/utils/query/get-field-id'
import React, { ReactNode } from 'react'
import { operacaoProdutoSchema } from './operacao-produto_schema'

type OperacaoProdutoProps = {
  operacao: ['operacao', string][]
  dia: ['dia', string][]
  produtoCorrente: ['produto', string][]
  onSelect?: (event: TSelection<any>) => void
  children?: ReactNode
}

export function OperacaoProduto({
  operacao,
  dia,
  children,
  produtoCorrente,
  onSelect,
}: OperacaoProdutoProps) {
  const [data, setData] = React.useState<
    {
      produto: string
      quantidade: number
    }[]
  >([])

  React.useEffect(() => {
    async function getData() {
      const data = await rpc.ordemProducaoOperacao.produto({
        operacao: getFieldId('operacao', operacao) || '',
        data: getFieldId('dia', dia),
      })
      setData(data)
    }
    getData()
  }, [dia, operacao])

  return (
    <Table
      rows={data || []}
      columns={operacaoProdutoSchema}
      selection={produtoCorrente}
      onSelection={onSelect}
      getId={(rec: any) => [['produto', rec.produto]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
