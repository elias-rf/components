import { Table } from '@/client/components/table/table.js'
import { TClienteStore } from '@/client/pages/comercial/clientes/components/clientes_store.js'
import { TClienteFields, TClienteKeys } from '@/core/cliente_controller.js'
import type { TData, TId } from '@/types/index.js'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useSnapshot } from 'valtio'
import { clienteColumns } from './components/cliente_columns.js'

export function ClienteTable({ store }: { store: TClienteStore }) {
  const state = useSnapshot(store.state) as typeof store.state

  function getId(row: TData<TClienteFields>): TId<TClienteKeys> {
    return [['CdCliente', row.CdCliente]]
  }

  useEffect(() => {
    toast.promise(
      store.fetchList(),
      {
        loading: 'lendo...',
        success: 'sucesso!',
        error: 'Erro ao carregar lista!',
      },
      {
        id: 'cliente-table',
      }
    )
  }, [state.where, state.orderBy])

  return (
    <div
      data-name="ClienteTable"
      className="h-full"
    >
      <Table
        columns={clienteColumns}
        getId={getId}
        onOrderBy={store.setOrderBy}
        onSelection={store.setSelection}
        onWhere={store.setWhere}
        orderBy={store.state.orderBy}
        rows={state.list ?? []}
        selection={state.selection}
        where={state.where}
      />
    </div>
  )
}
