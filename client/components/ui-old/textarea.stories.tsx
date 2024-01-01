import { JsonView } from '@/client/components/json-view/json-view.js'
import { Textarea } from '@/client/components/ui-old/textarea.js'
import '@/client/index.css'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

const meta: Meta<typeof Textarea> = {
  component: Textarea,
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

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  render: (props) => {
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
  },
}
