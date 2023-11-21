import { JsonView } from '@/client/components/json-view/json-view.js'
import { CheckBox, TCheckBoxProps } from '@/client/components/ui/check-box.js'
import '@/client/index.css'
import { Story, action } from '@ladle/react'
import React from 'react'

export default {
  title: 'components / ui / check Box',
  args: {
    disabled: false,
    variant: 'none',
    name: 'name',
    id: 'id',
  },
}

export const Default: Story<TCheckBoxProps> = (props: TCheckBoxProps) => {
  const [vlr, setVlr] = React.useState(true)
  return (
    <div className="flex flex-col space-y-4">
      <CheckBox
        {...props}
        value={vlr}
        onChange={(value: boolean) => {
          setVlr(value)
          action('onChange')({ value })
        }}
        onInput={(value: boolean, name: string) => {
          setVlr(value)
          action('onInput')({ value, name })
        }}
      ></CheckBox>
      <JsonView data={{ props, vlr }} />
    </div>
  )
}
