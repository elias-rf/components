import { Table } from '@/client/components/table'
import { clienteStore } from '@/client/features/cliente/cliente_store'
import { getSchema } from './get-shema'

export function ClienteQuantidade() {
  const vendaMensalQuantidade = clienteStore.use.vendaMensalQuantidade()
  const inicio = clienteStore.use.inicio()
  const fim = clienteStore.use.fim()
  const columns = getSchema({ inicio, fim })

  return (
    <Table
      rows={vendaMensalQuantidade ?? []}
      columns={columns}
    />
  )
}
