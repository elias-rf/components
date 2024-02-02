import { JsonView } from '@/client/components/json-view/json-view.js'
import { Label } from '@/client/components/label/label.js'
import { Title } from '@/client/components/title/title.js'
import { FormField } from '@/client/components/ui-old/form-field/form-field.js'
import {
  TToggleProps,
  ToggleForm,
} from '@/client/components/ui-old/toggle/toggle-form.js'

import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const meta: Meta<typeof ToggleForm> = {
  component: ToggleForm,
  args: {
    disabled: false,
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
}

export default meta
type Story = StoryObj<typeof ToggleForm>

export const Default: Story = {
  render: (props: TToggleProps) => {
    const form = useForm<{ input1: boolean }>({
      defaultValues: { input1: true },
    })
    return (
      <>
        <Title>Toggle Form</Title>
        <div className="flex flex-col space-y-4">
          <FormField>
            <Label htmlFor="input1">Input [1]</Label>
            <ToggleForm {...form.register('input1')} />
          </FormField>

          <JsonView data={{ props, vlr: form.watch() }} />
        </div>
      </>
    )
  },
}
