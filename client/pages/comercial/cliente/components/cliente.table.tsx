import { Table } from '@/client/components/table-full/table.js'
import { TClienteStore } from '@/client/pages/comercial/cliente/components/cliente.store.js'
import {
  TClienteDtoFields,
  TClienteDtoKeys,
} from '@/data/plano/cliente/cliente.type.js'
import type { TData, TId, TSelect } from '@/types/index.js'
import { useQuery } from '@tanstack/react-query'
import { clienteColumns } from './cliente.columns.js'

// cliente 3695

const select = clienteColumns.map(
  (col) => col.name
) as TSelect<TClienteDtoFields>

export function ClienteTable({ store }: { store: TClienteStore }) {
  const where = store.state.use.where()
  const orderBy = store.state.use.orderBy()
  const selection = store.state.use.selection()

  const query = useQuery({
    queryKey: ['cliente', { where, orderBy }],
    queryFn: () => store.fetchList({ where, orderBy, select }),
  })

  function getId(row: TData<TClienteDtoFields>): TId<TClienteDtoKeys> {
    return [['id', row.id]]
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
