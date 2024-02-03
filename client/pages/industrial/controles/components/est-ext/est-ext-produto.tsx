import { Table } from '@/client/components/table-full/table.js'
import { TEsterilizacaoExternaStore } from '@/client/pages/industrial/controles/components/est-ext/est-ext.store.js'
import { useQuery } from '@tanstack/react-query'
import { EsterilizacaoExternaProdutoSchema } from './est-ext-produto.schema.js'

type EsterilizacaoExternaProdutoProp = {
  children?: any
  store: TEsterilizacaoExternaStore
}

export function EsterilizacaoExternaProduto({
  children,
  store,
}: EsterilizacaoExternaProdutoProp) {
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
      selection={produto as any}
      onSelection={store.setProduto}
      getId={(rec: any) => [['produto', rec.produto]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
