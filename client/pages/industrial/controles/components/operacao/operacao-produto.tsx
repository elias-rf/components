import { Table } from '@/client/components/table-full/table.js'
import { TOperacaoStore } from '@/client/pages/industrial/controles/components/operacao/operacao.store.js'
import { useQuery } from '@tanstack/react-query'
import React, { ReactNode } from 'react'
import { operacaoProdutoSchema } from './operacao-produto.schema.js'

type OperacaoProdutoProps = {
  children?: ReactNode
  store: TOperacaoStore
}

export function OperacaoProduto({ children, store }: OperacaoProdutoProps) {
  const mes = store.state.use.mes()
  const operacao = store.state.use.operacao()
  const dia = store.state.use.dia()
  const produto = store.state.use.produto()

  const query = useQuery({
    queryKey: ['operacaoProduto', { mes, operacao }],
    queryFn: () => store.fetchOperacaoProduto(dia, operacao),
  })

  React.useEffect(() => {
    store.fetchOperacaoProduto(
      dia as ['dia', string][],
      operacao as ['operacao', string][]
    )
  }, [dia, operacao])

  return (
    <Table
      rows={query.data || []}
      columns={operacaoProdutoSchema}
      selection={produto}
      onSelection={store.setProduto}
      getId={(rec: any) => [['produto', rec.produto]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
