import { JsonView } from '@/client/components/json-view/json-view.js'
import type { TWhere } from '@/types/index.js'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Search } from './search.js'

const meta: Meta<typeof Search> = {
  component: Search,
}

export default meta
type Story = StoryObj<typeof Search>

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

function SearchStory(props: any) {
  const [where, setWhere] = React.useState<TWhere<'id'>>([['id', '<', '4']])

  function handleOnWhere(where: TWhere<any>) {
    setWhere(where)
    props.onWhere(where)
  }

  return (
    <div>
      <Search
        where={where}
        schema={schema}
        onWhere={handleOnWhere}
      />
      <JsonView
        data={where}
        className="mt-4 border-2 border-gray-500 p-2"
      />
    </div>
  )
}

export const Default: Story = { render: (props) => <SearchStory {...props} /> }
