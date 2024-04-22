import { Table } from '@/client/components/table-full/table.js'
import { TGrupoSujeitoStore } from '@/client/pages/sistema/permissoes/components/grupo-sujeito.store.js'
import {
  TGrupoSujeitoDtoFields,
  TGrupoSujeitoDtoKeys,
} from '@/data/oftalmo/grupo-sujeito/grupo-sujeito.type.js'
import { TData, TId, TSelect } from '@/types/index.js'
import { useQuery } from '@tanstack/react-query'
import { grupoSujeitoColumns } from './grupo-sujeito_columns.js'

const select = grupoSujeitoColumns.map(
  (col) => col.name
) as TSelect<TGrupoSujeitoDtoFields>

export function GrupoSujeitoTable({ store }: { store: TGrupoSujeitoStore }) {
  const where = store.state.use.where()
  const orderBy = store.state.use.orderBy()
  const selection = store.state.use.selection()

  const query = useQuery({
    queryKey: ['grupoSujeito', { where, orderBy }],
    queryFn: () => store.fetchList({ where, orderBy, select }),
  })

  function getId(
    row: TData<TGrupoSujeitoDtoFields>
  ): TId<TGrupoSujeitoDtoKeys> {
    return [
      ['grupoId', row.grupoId],
      ['sujeitoId', row.sujeitoId],
    ]
  }

  return (
    <>
      <div className="h-full">
        <Table
          columns={grupoSujeitoColumns}
          getId={getId}
          onOrderBy={store.setOrderBy}
          onSelection={store.setSelection}
          onWhere={store.setWhere}
          orderBy={orderBy}
          rows={query.data || []}
          selection={selection}
          where={where}
        ></Table>
      </div>
    </>
  )
}
