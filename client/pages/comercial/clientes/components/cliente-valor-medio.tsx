import { Table } from '@/client/components/table/table.js'
import { clienteStore } from '@/client/pages/comercial/clientes/cliente_store.js'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { getSchema } from './get-shema.js'

export function ClienteValorMedio() {
  const vendaMensalValorMedio = clienteStore.use.vendaMensalValorMedio()
  const inicio = clienteStore.use.inicio()
  const fim = clienteStore.use.fim()
  const selection = clienteStore.use.selection()
  const fetchVendaMensalValorMedio =
    clienteStore.use.fetchVendaMensalValorMedio()

  const columns = getSchema({ inicio, fim })

  useEffect(() => {
    toast.promise(
      fetchVendaMensalValorMedio(),
      {
        loading: 'Carregando valor médio...',
        success: 'Valor médio carregado com sucesso!',
        error: 'Erro ao carregar valor médio!',
      },
      {
        id: 'cliente-valor-medio',
        style: {
          minWidth: '300px',
        },
      }
    )
  }, [selection])

  return (
    <Table
      rows={vendaMensalValorMedio ?? []}
      columns={columns}
    />
  )
}
