import { Table } from '@/client/components/table'
import { useCliente } from '@/client/features/cliente/cliente_store'
import { getSchema } from './get-shema'

export function ClienteValor() {
  const vendaMensalValor = useCliente.use.vendaMensalValor()
  const inicio = useCliente.use.inicio()
  const fim = useCliente.use.fim()
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
