import { Input } from '@/client/components/ui/input'
import '@/client/index.css'
import type { Story } from '@ladle/react'
import { JsonViewer } from '@textea/json-viewer'
import React from 'react'

export default {
  title: 'Components/UI/input',
}

export const Default: Story = (props) => {
  const [vlr, setVlr] = React.useState('')
  return (
    <div className="flex flex-col space-y-4">
      <Input
        {...props}
        value={vlr}
        onChange={(e: any) => setVlr(e)}
      />
      <Input
        {...props}
        value={vlr}
        onInput={(e: any) => setVlr(e)}
      />
      <JsonViewer value={{ props, vlr }} />
    </div>
  )
}

Default.args = {
  label: 'Input text',
  helper: 'Mensagem',
  required: true,
  disabled: false,
}
Default.argTypes = {
  variant: {
    control: { type: 'select' },
    options: ['error', 'success', 'none'],
  },
}
