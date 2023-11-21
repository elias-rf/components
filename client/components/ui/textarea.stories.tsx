import { JsonView } from '@/client/components/json-view/json-view.js'
import { Textarea } from '@/client/components/ui/textarea.js'
import '@/client/index.css'
import type { Story } from '@ladle/react'
import React from 'react'

export default {
  title: 'Components / UI / Textarea',
  args: {
    label: 'Input text',
    helper: 'Mensagem',
    required: true,
    disabled: false,
    rows: 3,
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['error', 'success', 'none'],
    },
  },
}

export const Default: Story = (props) => {
  const [vlr, setVlr] = React.useState('')
  return (
    <div className="flex flex-col space-y-4">
      <Textarea
        {...props}
        value={vlr}
        onChange={(e: any) => setVlr(e.target.value)}
      />
      <JsonView data={{ vlr, props }} />
    </div>
  )
}
