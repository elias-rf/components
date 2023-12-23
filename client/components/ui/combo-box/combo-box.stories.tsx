import { Combobox } from '@/client/components/ui/combo-box/combo-box.js'
import '@/client/index.css'
import { useState } from '@/client/lib/hooks/use-state.js'
import { Story, action } from '@ladle/react'

export default {
  title: 'components/ui/Combobox',
  args: {
    required: true,
    disabled: false,
    options: [
      { label: 'Brazil', value: 'BR' },
      { label: 'Canada', value: 'CA' },
      { label: 'Chile', value: 'CH' },
      { label: 'France', value: 'FR' },
      { label: 'Japan', value: 'JP' },
      { label: 'Mexico', value: 'MX' },
      { label: 'New Zeland', value: 'NZ' },
      { label: 'United States', value: 'US' },
    ],
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['error', 'success', 'none'],
    },
  },
}

export const Default: Story = ({ options }: any) => {
  const teste = useState('')
  return (
    <div className="">
      <Combobox
        id="Combobox2"
        name="Combobox2"
        value={teste.get()}
        onInput={(value: string, name: string) => {
          action('onInput')({ value, name })
          teste.set(value)
        }}
        options={options}
      />
      Result: {teste.get()}
    </div>
  )
}
