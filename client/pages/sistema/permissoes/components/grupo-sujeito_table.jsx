import { useQuery } from '@tanstack/react-query'
import { Table } from '../../../../components_/table-full/table.jsx'

import { grupoSujeitoColumns } from './grupo-sujeito_columns.mjs'

const select = grupoSujeitoColumns.map((col) => col.name)

export function GrupoSujeitoTable({ store }) {
  const where = store.state.use.where()
  const orderBy = store.state.use.orderBy()
  const selection = store.state.use.selection()

  const query = useQuery({
    queryKey: ['grupoSujeito', { where, orderBy }],
    queryFn: () => store.fetchList({ where, orderBy, select }),
  })

  function getId(row) {
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
