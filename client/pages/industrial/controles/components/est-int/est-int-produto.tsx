import { Table } from '@/client/components/table-full/table.js'
import { TEsterilizacaoInternaStore } from '@/client/pages/industrial/controles/components/est-int/est-int-store.js'
import { useQuery } from '@tanstack/react-query'
import { EsterilizacaoInternaProdutoSchema } from './est-int-produto.schema.js'

type EsterilizacaoInternaProdutoProp = {
  children?: any
  store: TEsterilizacaoInternaStore
}

export function EsterilizacaoInternaProduto({
  children,
  store,
}: EsterilizacaoInternaProdutoProp) {
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
      selection={produto as any}
      onSelection={store.setProduto}
      getId={(rec: any) => [['produto', rec.produto]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
