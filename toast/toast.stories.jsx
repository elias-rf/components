import { Button } from '../button/button.jsx'
import { JsonView } from '../json-view/json-view.jsx'
import { Toaster } from '../toast/toaster.jsx'
import { useToast } from '../toast/use-toast.js'
import React from 'react'

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
