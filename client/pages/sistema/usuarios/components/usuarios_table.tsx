import { Table } from '@/client/components/table-full/table.js'
import { TUsuarioStore } from '@/client/pages/sistema/usuarios/components/usuario.store.js'
import { usuarioColumns } from '@/client/pages/sistema/usuarios/components/usuario_columns.js'
import {
  TUsuarioDtoFields,
  TUsuarioDtoKeys,
} from '@/core/usuario/usuario.type.js'
import type { TData, TId, TSelect } from '@/types/index.js'
import { useQuery } from '@tanstack/react-query'

const select = usuarioColumns.map(
  (col) => col.name
) as TSelect<TUsuarioDtoFields>

export function UsuarioTable({ store }: { store: TUsuarioStore }) {
  const where = store.state.use.where()
  const orderBy = store.state.use.orderBy()
  const selection = store.state.use.selection()

  const query = useQuery({
    queryKey: ['usuario', { where, orderBy }],
    queryFn: () => store.fetchList({ where, orderBy, select }),
  })

  function getId(row: TData<TUsuarioDtoFields>): TId<TUsuarioDtoKeys> {
    return [['id', row.id]]
  }

  return (
    <Table
      columns={usuarioColumns}
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
