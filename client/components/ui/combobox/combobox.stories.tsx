import { Combobox } from '@/client/components/ui/combobox'
import '@/client/index.css'
import { useState } from '@/client/lib/hooks/use-state'
import { Story } from '@ladle/react'

export default {
  title: 'components/ui/Combobox',
  args: {
    label: 'Combobox an option',
    helper: 'Mensagem',
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
        label="Combobox2"
        value={teste.get()}
        onInput={teste.set}
        options={options}
      />
      Result: {teste.get()}
    </div>
  )
}
