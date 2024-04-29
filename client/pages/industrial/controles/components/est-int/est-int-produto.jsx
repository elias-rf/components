import { useQuery } from '@tanstack/react-query'
import { Table } from '../../../../../components/table-full/table.jsx'
import { EsterilizacaoInternaProdutoSchema } from './est-int-produto.schema.mjs'

export function EsterilizacaoInternaProduto({ children, store }) {
  const produto = store.state.use.produto()
  const dia = store.state.use.dia()

  const query = useQuery({
    queryKey: ['esterilizacaoInternaProduto', { dia }],
    queryFn: () => store.fetchEsterilizacaoInternaProduto(dia),
  })

  return (
    <Table
      rows={query.data || []}
      columns={EsterilizacaoInternaProdutoSchema}
      selection={produto}
      onSelection={store.setProduto}
      getId={(rec) => [['produto', rec.produto]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
