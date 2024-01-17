import { JsonView } from '@/client/components/json-view/json-view.js'
import { Title } from '@/client/components/title/title.js'
import { SelectForm } from '@/client/components/ui-old/select/select-form.js'
import { Select } from '@/client/components/ui-old/select/select.js'
import '@/client/index.css'
import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'

const meta: Meta<typeof SelectForm> = {
  component: SelectForm,
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
type Story = StoryObj<typeof SelectForm>

export const Default: Story = {
  render: (props) => {
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
  },
}
