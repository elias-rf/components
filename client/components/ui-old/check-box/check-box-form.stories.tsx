import { JsonView } from '@/client/components/json-view/json-view.js'
import { CheckBoxForm } from '@/client/components/ui-old/check-box/check-box-form.js'
import { Title } from '@/client/components/ui-old/title.js'
import '@/client/index.css'
import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'

const meta: Meta<typeof CheckBoxForm> = {
  component: CheckBoxForm,
  args: {
    disabled: false,
    variant: undefined,
    name: 'name',
  },
}

export default meta
type Story = StoryObj<typeof CheckBoxForm>

export const Default: Story = {
  render: (props) => {
    const form = useForm<{ input1: boolean }>({
      defaultValues: { input1: true },
    })
    return (
      <>
        <Title>Toggle Form</Title>
        <div className="flex flex-col space-y-4">
          <CheckBoxForm
            {...props}
            {...form.register('input1')}
          ></CheckBoxForm>
          <JsonView data={{ props, vlr: form.watch() }} />
        </div>
      </>
    )
  },
}
