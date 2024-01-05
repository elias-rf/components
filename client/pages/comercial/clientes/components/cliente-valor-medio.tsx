import { Table } from '@/client/components/table/table.js'
import { clienteStore } from '@/client/pages/comercial/clientes/components/clientes_store.js'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useSnapshot } from 'valtio'
import { getSchema } from './get-shema.js'

export function ClienteValorMedio() {
  const state = useSnapshot(clienteStore.state) as typeof clienteStore.state
  const columns = getSchema({ inicio: state.inicio, fim: state.fim })

  useEffect(() => {
    toast.promise(
      clienteStore.fetchVendaMensalValorMedio(),
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
  }, [state.selection])

  return (
    <Table
      rows={state.vendaMensalValorMedio ?? []}
      columns={columns}
    />
  )
}
