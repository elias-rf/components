import { Table } from '@/client/components/table'
import { clienteStore } from '@/client/features/cliente/cliente_store'
import { getSchema } from './get-shema'

export function ClienteValor() {
  const vendaMensalValor = clienteStore.use.vendaMensalValor()
  const inicio = clienteStore.use.inicio()
  const fim = clienteStore.use.fim()
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
