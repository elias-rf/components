import { Table } from '@/client/components/table-full/table.js'
import { TClienteStore } from '@/client/pages/comercial/cliente/cliente.store.js'
import { TClienteFields, TClienteKeys } from '@/core/cliente_controller.js'
import type { TData, TId } from '@/types/index.js'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useSnapshot } from 'valtio'
import { clienteColumns } from './cliente.columns.js'

export function ClienteTable({ store }: { store: TClienteStore }) {
  const { where, orderBy, list, selection } = useSnapshot(
    store.state
  ) as typeof store.state

  function getId(row: TData<TClienteFields>): TId<TClienteKeys> {
    return [['CdCliente', row.CdCliente]]
  }

  // useEffect(() => {
  //   toast.promise(
  //     store.fetchList(),
  //     {
  //       loading: 'lendo...',
  //       success: 'sucesso!',
  //       error: 'Erro ao carregar lista!',
  //     },
  //     {
  //       id: 'cliente-table',
  //     }
  //   )
  // }, [where, orderBy])

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
        rows={list ?? []}
        selection={selection}
        where={where}
      />
    </div>
  )
}
