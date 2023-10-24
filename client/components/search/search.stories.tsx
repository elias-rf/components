import { JsonView } from '@/client/components/json-view/json-view'
import type { TWhere } from '@/types'
import { Story, StoryDefault } from '@ladle/react'
import React from 'react'
import { Search } from './search'

export default {
  title: 'components / search',
} satisfies StoryDefault

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
      <JsonView data={where} />
    </div>
  )
}

export const Default: Story = (props) => <SearchStory {...props} />
