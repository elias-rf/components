import { useQuery } from '@tanstack/react-query'
import { Table } from '../../../../../components_/table-full/table.jsx'
import { getSchema } from '../get-shema.mjs'

export function ClienteQuantidade({ store }) {
  const inicio = store.state.use.inicio()
  const fim = store.state.use.fim()
  const selection = store.state.use.selection()
  const query = useQuery({
    queryKey: ['cliente', 'vendaMensalQuantidade', { inicio, fim, selection }],
    queryFn: () => store.fetchVendaMensalQuantidade({ inicio, fim, selection }),
  })
  const columns = getSchema({ inicio, fim })

  return (
    <Table
      rows={query.data ?? []}
      columns={columns}
    />
  )
}
