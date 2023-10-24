import { JsonView } from '@/client/components/json-view/json-view'
import { Select, TSelectProps } from '@/client/components/ui/select'
import '@/client/index.css'
import type { Story } from '@ladle/react'
import React from 'react'

export default {
  title: 'components/ui/select',
  args: {
    label: 'Select an option',
    helper: 'Mensagem',
    required: true,
    disabled: false,
    options: [
      ['United States', 'US'],
      ['Canada', 'CA'],
      ['France', 'FR'],
    ],
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['error', 'success', 'none'],
    },
  },
}

export const Default: Story<TSelectProps> = (props: TSelectProps) => {
  const [vlr, setVlr] = React.useState('')
  return (
    <div className="flex flex-col space-y-4">
      <Select
        {...props}
        value={vlr}
        onChange={(e: string) => setVlr(e)}
      />

      <JsonView data={{ vlr, props }} />
    </div>
  )
}
