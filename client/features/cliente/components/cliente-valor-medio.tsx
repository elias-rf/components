import { Table } from '@/client/components/table'
import { useCliente } from '@/client/features/cliente/cliente_store'
import { getSchema } from './get-shema'

export function ClienteValorMedio() {
  const vendaMensalValorMedio = useCliente.use.vendaMensalValorMedio()
  const inicio = useCliente.use.inicio()
  const fim = useCliente.use.fim()
  const columns = getSchema({ inicio, fim })

  return (
    <Table
      rows={vendaMensalValorMedio ?? []}
      columns={columns}
    />
  )
}
