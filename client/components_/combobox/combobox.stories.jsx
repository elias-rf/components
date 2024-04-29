import { JsonView } from '@/client/components/json-view/json-view.jsx'
import React from 'react'
import { Combobox } from './combobox.jsx'

const meta = {
  component: Combobox,
}

export default meta

const frameworks = [
  {
    value: 'next.jsx',
    label: 'Next.jsx',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.jsx',
    label: 'Nuxt.jsx',
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

export const Default = {
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
