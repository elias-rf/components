import { useQuery } from '@tanstack/react-query'
import { Table } from '../../../../../components/table-full/table.jsx'
import { getSchema } from '../get-shema.mjs'

export function ClienteValor({ store }) {
  const inicio = store.state.use.inicio()
  const fim = store.state.use.fim()
  const selection = store.state.use.selection()
  const query = useQuery({
    queryKey: ['cliente', 'vendaMensalValor', { inicio, fim, selection }],
    queryFn: () => store.fetchVendaMensalValor({ inicio, fim, selection }),
  })
  const columns = getSchema({ inicio, fim })

  return (
    <Table
      rows={query.data ?? []}
      columns={columns}
    />
  )
}
