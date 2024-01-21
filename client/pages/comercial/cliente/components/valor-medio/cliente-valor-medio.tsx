import { Table } from '@/client/components/table-full/table.js'
import { TClienteStore } from '@/client/pages/comercial/cliente/cliente.store.js'
import { useSnapshot } from 'valtio'
import { getSchema } from '../get-shema.js'

export function ClienteValorMedio({ store }: { store: TClienteStore }) {
  const { inicio, fim, vendaMensalValorMedio } = useSnapshot(
    store.state
  ) as typeof store.state
  const columns = getSchema({ inicio, fim })

  return (
    <Table
      rows={vendaMensalValorMedio ?? []}
      columns={columns}
    />
  )
}
