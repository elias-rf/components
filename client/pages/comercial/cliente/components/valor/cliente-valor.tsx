import { Table } from '@/client/components/table-full/table.js'
import {
  TClienteStore,
  clienteStore,
} from '@/client/pages/comercial/cliente/cliente.store.js'
import { useSnapshot } from 'valtio'
import { getSchema } from '../get-shema.js'

export function ClienteValor({ store }: { store: TClienteStore }) {
  const { inicio, fim, vendaMensalValor } = useSnapshot(
    store.state
  ) as typeof clienteStore.state

  const columns = getSchema({ inicio, fim })

  return (
    <>
      <div></div>
      <Table
        rows={vendaMensalValor ?? []}
        columns={columns}
      />
    </>
  )
}
