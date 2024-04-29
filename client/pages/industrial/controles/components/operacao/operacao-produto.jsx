import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Table } from '../../../../../components_/table-full/table.jsx'
import { operacaoProdutoSchema } from './operacao-produto.schema.mjs'

export function OperacaoProduto({ children, store }) {
  const mes = store.state.use.mes()
  const operacao = store.state.use.operacao()
  const dia = store.state.use.dia()
  const produto = store.state.use.produto()

  const query = useQuery({
    queryKey: ['operacaoProduto', { mes, operacao }],
    queryFn: () => store.fetchOperacaoProduto(dia, operacao),
  })

  React.useEffect(() => {
    store.fetchOperacaoProduto(dia, operacao)
  }, [dia, operacao])

  return (
    <Table
      rows={query.data || []}
      columns={operacaoProdutoSchema}
      selection={produto}
      onSelection={store.setProduto}
      getId={(rec) => [['produto', rec.produto]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
