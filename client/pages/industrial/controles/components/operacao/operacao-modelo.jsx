import { useQuery } from '@tanstack/react-query'
import { Table } from '../../../../../components_/table-full/table.jsx'
import { operacaoModeloSchema } from './operacao-modelo.schema.mjs'

export function OperacaoModelo({ store }) {
  const mes = store.state.use.mes()
  const operacao = store.state.use.operacao()
  const dia = store.state.use.dia()
  const produto = store.state.use.produto()

  const query = useQuery({
    queryKey: ['operacaoModelo', { mes }],
    queryFn: () => store.fetchOperacaoModelo(dia, produto, operacao),
  })

  return (
    <Table
      rows={query.data || []}
      columns={operacaoModeloSchema}
    ></Table>
  )
}
