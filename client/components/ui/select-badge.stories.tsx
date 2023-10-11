import {
  SelectBadge,
  TSelectBadgeProps,
} from '@/client/components/ui/select-badge'
import '@/client/index.css'
import type { Story } from '@ladle/react'
import React from 'react'
import ReactJson from 'react-json-view'

export default {
  title: 'components/ui/select-badge',
  args: {
    label: 'Select an option',
    helper: 'Mensagem',
    required: true,
    disabled: false,
    options: [
      ['', ''],
      ['United States', 'US'],
      ['Canada', 'CA'],
      ['France', 'FR'],
      ['Brazil', 'BR'],
      ['Germany', 'DE'],
      ['India', 'IN'],
      ['Japan', 'JP'],
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
    <div className="flex flex-col w-full space-y-4">
      <SelectBadge
        {...props}
        value={vlr}
        onChange={(e: string[]) => setVlr(e.sort())}
      />

      <ReactJson
        src={{ value: vlr, props }}
        theme="flat"
      />
    </div>
  )
}
