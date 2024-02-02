import { Button } from '@/client/components/button/button.js'
import { JsonView } from '@/client/components/json-view/json-view.js'
import { SelectBadge } from '@/client/components/select-badge/select-badge.js'

import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const meta: Meta<typeof SelectBadge> = {
  component: SelectBadge,
  args: {
    disabled: false,
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
  render: () => {
    const form = useForm<{ slc: string }>({ defaultValues: { slc: 'BR' } })
    const onSubmit: SubmitHandler<{ slc: string }> = (data) => console.log(data)

    return (
      <div>
        <SelectBadge
          options={[
            ['United States', 'US'],
            ['Canada', 'CA'],
            ['Chile', 'CH'],
            ['France', 'FR'],
            ['Brazil', 'BR'],
            ['Germany', 'DE'],
            ['India', 'IN'],
            ['Japan', 'JP'],
          ]}
          {...form.register('slc')}
        />
        <Button onClick={form.handleSubmit(onSubmit)}>Submit</Button>

        <JsonView data={{ vlr: form.watch() }} />
      </div>
    )
  },
}
