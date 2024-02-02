import { Table } from '@/client/components/table-full/table.js'
import { TEsterilizacaoExternaStore } from '@/client/pages/industrial/controles/components/est-ext/est-ext.store.js'
import { useQuery } from '@tanstack/react-query'
import { esterilizacaoExternaModeloSchema } from './est-ext-modelo.schema.js'

export function EsterilizacaoExternaModelo({
  store,
}: {
  store: TEsterilizacaoExternaStore
}) {
  const produto = store.state((state) => state.produto)
  const dia = store.state((state) => state.dia)

  const query = useQuery({
    queryKey: ['esterilizacaoExternaModelo', { dia, produto }],
    queryFn: () => store.fetchEsterilizacaoExternaModelo(dia, produto),
  })

  return (
    <Table
      rows={query.data || []}
      columns={esterilizacaoExternaModeloSchema}
    />
  )
}
