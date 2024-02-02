import { Table } from '@/client/components/table-full/table.js'
import { TClienteStore } from '@/client/pages/comercial/cliente/components/cliente.store.js'
import { useQuery } from '@tanstack/react-query'
import { getSchema } from '../get-shema.js'

export function ClienteValor({ store }: { store: TClienteStore }) {
  const inicio = store.state((state) => state.inicio)
  const fim = store.state((state) => state.fim)
  const selection = store.state((state) => state.selection)
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
