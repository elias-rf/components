import { JsonView } from '@/client/components/json-view/json-view.js'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Combobox } from './combobox.js'

const meta: Meta<typeof Combobox> = {
  component: Combobox,
}

export default meta
type Story = StoryObj<typeof Combobox>

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
]

export const Default: Story = {
  render: (props) => {
    const [vlr, setVlr] = React.useState('')
    return (
      <div className="flex w-60 flex-col space-y-4">
        <Combobox
          options={frameworks}
          value={vlr}
          onValueChange={(e) => setVlr(e)}
          placeholder="Selecione framework..."
          inputPlaceholder="Digite framework..."
        ></Combobox>
        <JsonView data={{ props, vlr }} />
      </div>
    )
  },
}
