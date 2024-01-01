import { JsonView } from '@/client/components/json-view/json-view.js'
import {
  SelectBadge,
  TSelectBadgeProps,
} from '@/client/components/ui-old/select-badge/select-badge.js'
import '@/client/index.css'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

const meta: Meta<typeof SelectBadge> = {
  component: SelectBadge,
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

export default meta
type Story = StoryObj<typeof SelectBadge>

export const Default: Story = {
  render: (props: TSelectBadgeProps) => {
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
  },
}
