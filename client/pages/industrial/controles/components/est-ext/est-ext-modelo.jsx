import { useQuery } from '@tanstack/react-query'
import { Table } from '../../../../../components/table-full/table.jsx'
import { esterilizacaoExternaModeloSchema } from './est-ext-modelo.schema.mjs'

export function EsterilizacaoExternaModelo({ store }) {
  const produto = store.state.use.produto()
  const dia = store.state.use.dia()

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
