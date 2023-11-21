import { JsonView } from '@/client/components/json-view/json-view.js'
import { Select, TSelectProps } from '@/client/components/ui/select/select.js'
import '@/client/index.css'
import type { Story } from '@ladle/react'
import React from 'react'

export default {
  title: 'components/ui/select',
  args: {
    required: true,
    disabled: false,
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
      >
        <Select.Option value="US">United States</Select.Option>
        <Select.Option value="CA">Canada</Select.Option>
        <Select.Option value="FR">France</Select.Option>
      </Select>

      <JsonView data={{ vlr, props }} />
    </div>
  )
}
