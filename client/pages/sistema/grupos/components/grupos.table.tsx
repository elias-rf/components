import { Table } from '@/client/components/table-full/table.js'
import { TGroupStore } from '@/client/pages/sistema/grupos/components/grupos.store.js'
import { gruposColumns } from '@/client/pages/sistema/grupos/components/grupos_columns.js'
import {
  TGroupDtoFields,
  TGroupDtoKeys,
} from '@/data/oftalmo/grupo/group.type.js'
import type { TData, TId, TSelect } from '@/types/index.js'
import { useQuery } from '@tanstack/react-query'

const select = gruposColumns.map((col) => col.name) as TSelect<TGroupDtoFields>

export function GruposTable({ store }: { store: TGroupStore }) {
  const where = store.state.use.where()
  const orderBy = store.state.use.orderBy()
  const selection = store.state.use.selection()

  const query = useQuery({
    queryKey: ['grupo', { where, orderBy }],
    queryFn: () => store.fetchList({ where, orderBy, select }),
  })

  function getId(row: TData<TGroupDtoFields>): TId<TGroupDtoKeys> {
    return [['id', row.id]]
  }

  return (
    <Table
      columns={gruposColumns}
      getId={getId}
      onOrderBy={store.setOrderBy}
      onSelection={store.setSelection}
      onWhere={store.setWhere}
      orderBy={orderBy}
      rows={query.data || []}
      selection={selection}
      where={where}
    />
  )
}
