import React from 'react'
import { Button } from '../button/button.jsx'
import { JsonView } from '../json-view/json-view.jsx'
import { Toaster } from './toaster.jsx'
import { useToast } from './use-toast.js'

const meta = {
  component: Toaster,
}

export default meta

export const Default = {
  render: (props) => {
    const t = useToast()
    const [count, setCount] = React.useState(0)

    return (
      <>
        <Button
          variant="outline"
          onClick={() => {
            t.toast({
              title: 'Título',
              description: 'Descrição',
            })
          }}
        >
          Show
        </Button>
        <Toaster />
        <JsonView data={{ props, t }} />
      </>
    )
  },
}
