import { JsonView } from '@/client/components/json-view/json-view'
import { CheckBox, TCheckBoxProps } from '@/client/components/ui/check-box'
import '@/client/index.css'
import type { Story } from '@ladle/react'
import React from 'react'

export default {
  title: 'components / ui / checkBox',
  args: {
    disabled: false,
    label: 'Label',
    value: false,
    required: true,
    variant: 'none',
    helper: 'Ajuda',
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
}

export const Default: Story<TCheckBoxProps> = (props: TCheckBoxProps) => {
  const [vlr, setVlr] = React.useState(true)
  return (
    <div className="flex flex-col space-y-4">
      <CheckBox
        {...props}
        value={vlr}
        onChange={(e: any) => setVlr(e)}
      ></CheckBox>
      <JsonView data={{ props, vlr }} />
    </div>
  )
}
