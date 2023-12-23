import { JsonView } from '@/client/components/json-view/json-view.js'
import { Button } from '@/client/components/ui/button/button.js'
import { SelectBadgeForm } from '@/client/components/ui/select-badge/select-badge-form.js'
import '@/client/index.css'
import type { Story } from '@ladle/react'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export default {
  title: 'components/ui/select-badge form',
  args: {
    label: 'Select an option',
    helper: 'Mensagem',
    required: true,
    disabled: false,
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['error', 'success', 'none'],
    },
  },
}

export const Default: Story = () => {
  const form = useForm<{ slc: string }>({ defaultValues: { slc: 'BR' } })
  const onSubmit: SubmitHandler<{ slc: string }> = (data) => console.log(data)

  return (
    <div>
      <SelectBadgeForm
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
}
