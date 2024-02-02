import { Table } from '@/client/components/table-full/table.js'
import { TClienteStore } from '@/client/pages/comercial/cliente/components/cliente.store.js'
import { TClienteFields, TClienteKeys } from '@/core/cliente_controller.js'
import type { TData, TId, TSelect } from '@/types/index.js'
import { useQuery } from '@tanstack/react-query'
import { clienteColumns } from './cliente.columns.js'

// cliente 3695

const select = clienteColumns.map((col) => col.name) as TSelect<TClienteFields>

export function ClienteTable({ store }: { store: TClienteStore }) {
  const where = store.state((state) => state.where)
  const orderBy = store.state((state) => state.orderBy)
  const selection = store.state((state) => state.selection)

  const query = useQuery({
    queryKey: ['cliente', { where, orderBy }],
    queryFn: () => store.fetchList({ where, orderBy, select }),
  })

  function getId(row: TData<TClienteFields>): TId<TClienteKeys> {
    return [['CdCliente', row.CdCliente]]
  }

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
        orderBy={orderBy}
        rows={query.data || []}
        selection={selection}
        where={where}
      />
    </div>
  )
}
