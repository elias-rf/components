import { Combobox } from '@/client/components/ui-old/combo-box/combo-box.js'
import '@/client/index.css'
import { useState } from '@/client/lib/hooks/use-state.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Combobox> = {
  component: Combobox,
  args: {
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

export default meta
type Story = StoryObj<typeof Combobox>

export const Default: Story = {
  render: ({ options }: any) => {
    const teste = useState('')
    return (
      <div className="">
        <Combobox
          id="Combobox2"
          name="Combobox2"
          value={teste.get()}
          onInput={(value: string, name: string) => {
            // action('onInput')({ value, name })
            teste.set(value)
          }}
          options={options}
        />
        Result: {teste.get()}
      </div>
    )
  },
}
