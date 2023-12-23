import { JsonView } from '@/client/components/json-view/json-view.js'
import { SelectForm } from '@/client/components/ui/select/select-form.js'
import { Select, TSelectProps } from '@/client/components/ui/select/select.js'
import { Title } from '@/client/components/ui/title.js'
import '@/client/index.css'
import type { Story } from '@ladle/react'
import React from 'react'
import { useForm } from 'react-hook-form'

export default {
  title: 'components/ui/select form',
  args: {
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

export const Default: Story<TSelectProps> = (props: TSelectProps) => {
  const form = useForm<{ input1: string }>({ defaultValues: { input1: '' } })
  return (
    <>
      <Title>Select Form</Title>
      <div className="flex flex-col space-y-4">
        <SelectForm
          {...props}
          {...form.register('input1')}
        >
          <Select.Option value="US">United States</Select.Option>
          <Select.Option value="CA">Canada</Select.Option>
          <Select.Option value="FR">France</Select.Option>
        </SelectForm>

        <JsonView data={{ props, vlr: form.watch() }} />
      </div>
    </>
  )
}
