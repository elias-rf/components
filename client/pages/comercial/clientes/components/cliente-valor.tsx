import { Table } from '@/client/components/table/table.js'
import { clienteStore } from '@/client/pages/comercial/clientes/cliente_store.js'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { getSchema } from './get-shema.js'

export function ClienteValor() {
  const vendaMensalValor = clienteStore.use.vendaMensalValor()
  const inicio = clienteStore.use.inicio()
  const fim = clienteStore.use.fim()
  const selection = clienteStore.use.selection()
  const fetchVendaMensalValor = clienteStore.use.fetchVendaMensalValor()

  const columns = getSchema({ inicio, fim })

  useEffect(() => {
    toast.promise(
      fetchVendaMensalValor(),
      {
        loading: 'Carregando valor...',
        success: 'Valor carregado com sucesso!',
        error: 'Erro ao carregar valor!',
      },
      {
        id: 'cliente-valor',
        style: {
          minWidth: '300px',
        },
      }
    )
  }, [selection])

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
