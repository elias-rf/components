import type { TWhere } from '@/types'
import { Story, StoryDefault } from '@ladle/react'
import { JsonViewer } from '@textea/json-viewer'
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
      <JsonViewer
        rootName="where"
        value={where}
        highlightUpdates
        className="text-xs"
      />
    </div>
  )
}

export const Default: Story = (props) => <SearchStory {...props} />
