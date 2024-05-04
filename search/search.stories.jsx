import { JsonView } from '../json-view/json-view.jsx'
import React from 'react'
import { Search } from './search.jsx'

const meta = {
  component: Search,
}

export default meta

const schema = [
  {
    label: 'ID',
    name: 'id',
    typeField: 'int',
  },
  {
    label: 'Nome',
    name: 'nome',
  },
  {
    label: 'Valor de compra',
    name: 'compra',
  },
]

function SearchStory(props) {
  const [where, setWhere] = React.useState([['id', '<', '4']])

  function handleOnWhere(where) {
    setWhere(where)
    props.onWhere(where)
  }

  return (
    <div>
      <Search where={where} schema={schema} onWhere={handleOnWhere} />
      <JsonView data={where} className="p-2 mt-4 border-2 border-gray-500" />
    </div>
  )
}

export const Default = { render: (props) => <SearchStory {...props} /> }
