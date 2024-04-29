import { useQuery } from '@tanstack/react-query'
import { Table } from '../../../../../components_/table-full/table.jsx'
import { EsterilizacaoExternaProdutoSchema } from './est-ext-produto.schema.mjs'

export function EsterilizacaoExternaProduto({ children, store }) {
  const produto = store.state.use.produto()
  const dia = store.state.use.dia()

  const query = useQuery({
    queryKey: ['esterilizacaoExternaProduto', { dia }],
    queryFn: () => store.fetchEsterilizacaoExternaProduto(dia),
  })

  return (
    <Table
      rows={query.data || []}
      columns={EsterilizacaoExternaProdutoSchema}
      selection={produto}
      onSelection={store.setProduto}
      getId={(rec) => [['produto', rec.produto]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
