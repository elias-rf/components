import { Table } from '@/client/components/table/table.js'
import { clienteStore } from '@/client/pages/comercial/clientes/components/clientes_store.js'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useSnapshot } from 'valtio'
import { getSchema } from './get-shema.js'

export function ClienteQuantidade() {
  const state = useSnapshot(clienteStore.state) as typeof clienteStore.state

  const columns = getSchema({ inicio: state.inicio, fim: state.fim })

  useEffect(() => {
    toast.promise(
      clienteStore.fetchVendaMensalQuantidade(),
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
  }, [state.selection])

  return (
    <Table
      rows={state.vendaMensalQuantidade ?? []}
      columns={columns}
    />
  )
}
