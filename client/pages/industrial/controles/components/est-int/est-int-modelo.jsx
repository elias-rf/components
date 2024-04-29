import { useQuery } from '@tanstack/react-query'
import { Table } from '../../../../../components_/table-full/table.jsx'
import { esterilizacaoInternaModeloSchema } from './est-int-modelo.schema.mjs'

export function EsterilizacaoInternaModelo({ store }) {
  const produto = store.state.use.produto()
  const dia = store.state.use.dia()

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
