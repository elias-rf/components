import { Button } from '@/client/components/button/button.jsx'
import { JsonView } from '@/client/components/json-view/json-view.jsx'
import { Toaster } from '@/client/components/toast/toaster.jsx'
import { useToast } from '@/client/components/toast/use-toast.jsx'
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
