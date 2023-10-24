import { JsonView } from '@/client/components/json-view/json-view'
import { TColumn, TId, TOrderBy, TRow, TSelection, TWhere } from '@/types'
import { deepEqual } from '@/utils/object/deep-equal'
import type { Story } from '@ladle/react'
import React from 'react'
import { Table } from './table'

export default {
  title: 'components/table',
}

function createData(
  dessert: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { dessert, calories, fat, carbs, protein }
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt 2', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich 2', 237, 9.0, 37, 4.3),
  createData('Eclair 2', 262, 16.0, 24, 6.0),
  createData('Cupcake 2', 305, 3.7, 67, 4.3),
  createData('Gingerbread 2', 356, 16.0, 49, 3.9),
]

const schema: TColumn[] = [
  { label: 'Dessert', name: 'dessert' },
  {
    label: 'Calories',
    name: 'calories',
    align: 'right',
    sortable: false,
    width: '80px',
  },
  {
    label: 'Fat (g)',
    name: 'fat',
    align: 'right',
    format: (v: number) => v.toFixed(2),
    width: '80px',
  },
  { label: 'Carbs (g)', name: 'carbs', align: 'right', width: '80px' },
  { label: 'Protein (g)', name: 'protein', align: 'right', width: '90px' },
]

export const Default: Story = () => {
  return (
    <>
      <Table
        columns={schema}
        rows={data}
      ></Table>
    </>
  )
}

export const Full: Story = () => {
  const [selection, setSelection] = React.useState<TSelection<string>>([])
  const [sort, setSort] = React.useState<TOrderBy<string>>([])
  const [filter, onFilter] = React.useState<TWhere<string>>([
    ['dessert', '>', 'Eclair'],
  ] as TWhere<string>)
  const getId = (row: TRow) => [['dessert', row.dessert]] as TId<string>

  function onSelection(selected: TSelection<string>) {
    if (deepEqual(selected, selection)) return setSelection([])
    setSelection(selected)
  }

  return (
    <>
      <Table
        rows={data}
        columns={schema}
        selection={selection}
        onSelection={onSelection}
        orderBy={sort}
        onOrderBy={setSort}
        where={filter}
        onWhere={onFilter}
        getId={getId}
      >
        {({ row }) => {
          return (
            <tr>
              <td colSpan={100}>
                <JsonView
                  data={{
                    row,
                  }}
                />
              </td>
            </tr>
          )
        }}
      </Table>

      <JsonView
        data={{
          selection,
          sort,
          filter,
        }}
      />
    </>
  )
}
