import { Table } from '@/client/components/table'
import { useCliente } from '@/client/features/cliente/cliente_store'
import { getSchema } from './get-shema'

export function ClienteQuantidade() {
  const vendaMensalQuantidade = useCliente.use.vendaMensalQuantidade()
  const inicio = useCliente.use.inicio()
  const fim = useCliente.use.fim()
  const columns = getSchema({ inicio, fim })

  return (
    <Table
      rows={vendaMensalQuantidade ?? []}
      columns={columns}
    />
  )
}
