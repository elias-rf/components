import { Table } from '@/client/components/table/table.js'
import { clienteStore } from '@/client/features/cliente/cliente_store.js'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { getSchema } from './get-shema.js'

export function ClienteQuantidade() {
  const vendaMensalQuantidade = clienteStore.use.vendaMensalQuantidade()
  const inicio = clienteStore.use.inicio()
  const fim = clienteStore.use.fim()
  const fetchVendaMensalQuantidade =
    clienteStore.use.fetchVendaMensalQuantidade()
  const selection = clienteStore.use.selection()

  const columns = getSchema({ inicio, fim })

  useEffect(() => {
    toast.promise(
      fetchVendaMensalQuantidade(),
      {
        loading: 'Carregando quantidade...',
        success: 'Quantidade carregado com sucesso!',
        error: 'Erro ao carregar quantidade!',
      },
      {
        id: 'cliente-quantidade',
        style: {
          minWidth: '300px',
        },
      }
    )
  }, [selection])

  return (
    <Table
      rows={vendaMensalQuantidade ?? []}
      columns={columns}
    />
  )
}
