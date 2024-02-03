import { Table } from '@/client/components/table-full/table.js'
import { TClienteStore } from '@/client/pages/comercial/cliente/components/cliente.store.js'
import { useQuery } from '@tanstack/react-query'
import { getSchema } from '../get-shema.js'

export function ClienteQuantidade({ store }: { store: TClienteStore }) {
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
