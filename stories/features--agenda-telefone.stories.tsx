import type { Story } from '@ladle/react'
import { AgendaTelefone } from '../client/features/agenda-telefone/agenda-telefone'
import ReactJson from 'react-json-view'
import React from 'react'
import { deepEqual } from '@/utils/object/deep-equal'

export const Default: Story = () => {
  const [state, setState] = React.useState({})

  function handleState(arg: any) {
    if (deepEqual(arg, state)) return
    setState(arg)
  }

  return (
    <div className="flex flex-col space-y-4">
      <AgendaTelefone onState={handleState} />
      <ReactJson
        src={{ state }}
        theme="flat"
      />
    </div>
  )
}
