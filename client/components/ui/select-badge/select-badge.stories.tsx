import { JsonView } from '@/client/components/json-view/json-view.js'
import {
  SelectBadge,
  TSelectBadgeProps,
} from '@/client/components/ui/select-badge/select-badge.js'
import '@/client/index.css'
import type { Story } from '@ladle/react'
import React from 'react'

export default {
  title: 'components/ui/select-badge',
  args: {
    label: 'Select an option',
    helper: 'Mensagem',
    required: true,
    disabled: false,
    options: [
      { label: '', value: '' },
      { label: 'United States', value: 'US' },
      { label: 'Canada', value: 'CA' },
      { label: 'France', value: 'FR' },
      { label: 'Brazil', value: 'BR' },
      { label: 'Germany', value: 'DE' },
      { label: 'India', value: 'IN' },
      { label: 'Japan', value: 'JP' },
    ],
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['error', 'success', 'none'],
    },
  },
}

export const Default: Story<TSelectBadgeProps> = (props: TSelectBadgeProps) => {
  const [vlr, setVlr] = React.useState<string[]>([])
  return (
    <div className="flex w-full flex-col space-y-4">
      <SelectBadge
        {...props}
        value={vlr}
        onChange={(e: string[]) => setVlr(e.sort())}
      />

      <JsonView data={{ value: vlr, props }} />
    </div>
  )
}
