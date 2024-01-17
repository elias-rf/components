import { Table } from '@/client/components/table-full/table.js'
import { clienteStore } from '@/client/pages/comercial/clientes/components/clientes_store.js'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useSnapshot } from 'valtio'
import { getSchema } from './get-shema.js'

export function ClienteValor() {
  const state = useSnapshot(clienteStore.state) as typeof clienteStore.state

  const columns = getSchema({ inicio: state.inicio, fim: state.fim })

  useEffect(() => {
    toast.promise(
      clienteStore.fetchVendaMensalValor(),
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
  }, [state.selection])

  return (
    <>
      <div></div>
      <Table
        rows={state.vendaMensalValor ?? []}
        columns={columns}
      />
    </>
  )
}
