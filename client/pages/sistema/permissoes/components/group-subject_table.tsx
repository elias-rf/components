import { Table } from '@/client/components/table-full/table.js'
import { TGroupSubjectStore } from '@/client/pages/sistema/permissoes/components/group-subject.store.js'
import {
  TGroupSubjectFields,
  TGroupSubjectKeys,
} from '@/core/group-subject_controller.js'
import { TData, TId, TSelect } from '@/types/index.js'
import { useQuery } from '@tanstack/react-query'
import { groupSubjectColumns } from './group-subject_columns.js'

const select = groupSubjectColumns.map(
  (col) => col.name
) as TSelect<TGroupSubjectFields>

export function GroupSubjectTable({ store }: { store: TGroupSubjectStore }) {
  const where = store.state.use.where()
  const orderBy = store.state.use.orderBy()
  const selection = store.state.use.selection()

  const query = useQuery({
    queryKey: ['groupSubject', { where, orderBy }],
    queryFn: () => store.fetchList({ where, orderBy, select }),
  })

  function getId(row: TData<TGroupSubjectFields>): TId<TGroupSubjectKeys> {
    return [
      ['idGroup', row.idGroup],
      ['idSubject', row.idSubject],
    ]
  }

  return (
    <>
      <div className="h-full">
        <Table
          columns={groupSubjectColumns}
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
