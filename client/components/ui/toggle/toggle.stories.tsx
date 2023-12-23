import { JsonView } from '@/client/components/json-view/json-view.js'
import { TToggleProps, Toggle } from '@/client/components/ui/toggle/toggle.js'
import '@/client/index.css'
import type { Story } from '@ladle/react'
import React from 'react'

export default {
  title: 'components / ui / Toggle',
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

export const Default: Story<TToggleProps> = (props: TToggleProps) => {
  const [vlr, setVlr] = React.useState(true)
  return (
    <div className="flex flex-col space-y-4">
      <Toggle
        {...props}
        value={vlr}
        onChange={(e: any) => setVlr(e)}
      ></Toggle>
      <JsonView data={{ props, vlr }} />
    </div>
  )
}
