import { Table } from '@/client/components/table-full/table.js'
import { TEsterilizacaoInternaStore } from '@/client/pages/industrial/controles/components/est-int/est-int-store.js'
import { useQuery } from '@tanstack/react-query'
import { esterilizacaoInternaModeloSchema } from './est-int-modelo.schema.js'

export function EsterilizacaoInternaModelo({
  store,
}: {
  store: TEsterilizacaoInternaStore
}) {
  const produto = store.state((state) => state.produto)
  const dia = store.state((state) => state.dia)

  const query = useQuery({
    queryKey: ['esterilizacaoInternaModelo', { dia, produto }],
    queryFn: () => store.fetchEsterilizacaoInternaModelo(dia, produto),
  })

  return (
    <Table
      rows={query.data || []}
      columns={esterilizacaoInternaModeloSchema}
    ></Table>
  )
}
