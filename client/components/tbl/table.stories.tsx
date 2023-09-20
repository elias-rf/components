import { TWhere, TSelection, TOrderBy, TId } from '@/types'
import { deepEqual } from '@/utils/object/deep-equal'
import type { Meta, StoryObj } from '@storybook/react'
import { JsonViewer } from '@textea/json-viewer'
import React from 'react'
import { TColumn, TRow, Table } from './table'

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
]

const schema: TColumn[] = [
  { label: 'Dessert', name: 'dessert' },
  {
    label: 'Calories',
    name: 'calories',
    align: 'right',
    sortable: false,
    width: 80,
  },
  {
    label: 'Fat (g)',
    name: 'fat',
    align: 'right',
    format: (v: number) => v.toFixed(2),
    width: 80,
  },
  { label: 'Carbs (g)', name: 'carbs', align: 'right', width: 80 },
  { label: 'Protein (g)', name: 'protein', align: 'right', width: 90 },
]

const meta: Meta<typeof Table> = {
  component: Table,
}

export default meta

type Story = StoryObj<typeof Table>

export const Default: Story = {
  render: () => {
    return (
      <>
        <Table
          columns={schema}
          rows={data}
        ></Table>
      </>
    )
  },
}

const GridStory = () => {
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
                <JsonViewer
                  value={{
                    row,
                  }}
                />
              </td>
            </tr>
          )
        }}
      </Table>

      <JsonViewer
        value={{
          selection,
          sort,
          filter,
        }}
      />
    </>
  )
}

export const Full: Story = {
  render: () => <GridStory />,
}
