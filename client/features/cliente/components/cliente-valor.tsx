import { Table } from '@/client/components/table'
import { clienteStore } from '@/client/features/cliente/cliente_store'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { getSchema } from './get-shema'

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
