import MuiTableCell from '@mui/material/TableCell'
import { TColumn } from './table'

export type TTableHeadColProps = {
  col: TColumn
  sort: [[field: string, ord: 'asc' | 'desc']]
}

const ShowSortIcon = ({
  col,
  sort,
}: {
  col: TColumn
  sort?: [[field: string, ord: 'asc' | 'desc']]
}) => {
  if (col.sortable === false || !sort) return null
  if (sort.length > 0 && sort[0][0] === col.name) {
    if (sort[0][1] === 'asc') return <span>{'🡑'}</span>
    if (sort[0][1] === 'desc') return <span>{'🡓'}</span>
  }
  return <span>{'⇅'}</span>
}

export function TableHeadCol({ col, sort, ...rest }: TTableHeadColProps) {
  return (
    <MuiTableCell
      align={col.align}
      variant="head"
      {...rest}
    >
      {[col.label]}{' '}
      <ShowSortIcon
        col={col}
        sort={sort}
      />
    </MuiTableCell>
  )
}
