import { isEqual } from 'lodash-es'
import React from 'react'
import { JsonView } from '../json-view/json-view.jsx'
import { Table, initReducer, tableReducer } from './table.jsx'

const meta = {
  component: Table,
  args: {},
}

export default meta

function createData(dessert, calories, fat, carbs, protein) {
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

const schema = [
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
    format: (v) => v.toFixed(2),
    width: '80px',
  },
  { label: 'Carbs (g)', name: 'carbs', align: 'right', width: '80px' },
  { label: 'Protein (g)', name: 'protein', align: 'right', width: '90px' },
]

export const Default = {
  render: () => (
    <>
      <Table
        columns={schema}
        rows={data}
      ></Table>
    </>
  ),
}

export const Full = {
  render: () => {
    const getId = (row) => [['dessert', row.dessert]]
    const [stateTable, dispatchTable] = React.useReducer(
      tableReducer,
      null,
      initReducer
    )

    function dispatch(action) {
      if (action.type === 'setSelection') {
        if (isEqual(action.value, stateTable.selection)) {
          action.value = []
        }
      }
      dispatchTable(action)
    }

    return (
      <>
        <Table
          rows={data}
          columns={schema}
          state={stateTable}
          getId={getId}
          dispatch={dispatch}
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
            stateTable,
          }}
        />
      </>
    )
  },
}
