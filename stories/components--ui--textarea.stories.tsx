import type { Story } from '@ladle/react'
import React from 'react'
import { Textarea } from '@/client/components/ui/textarea'
import { JsonViewer } from '@textea/json-viewer'
import '@/client/index.css'

function TextareaAux(props: any) {
  const [vlr, setVlr] = React.useState('')
  return (
    <div className="flex flex-col space-y-4">
      <Textarea
        {...props}
        value={vlr}
        onChange={(e: any) => setVlr(e.target.value)}
      />
      <JsonViewer value={{ vlr, props }} />
    </div>
  )
}

export const Default: Story = (props) => {
  return <TextareaAux {...props} />
}

Default.args = {
  label: 'Input text',
  helper: 'Mensagem',
  required: true,
  disabled: false,
  rows: 3,
}
Default.argTypes = {
  variant: {
    control: { type: 'select' },
    options: ['error', 'success', 'none'],
  },
}
