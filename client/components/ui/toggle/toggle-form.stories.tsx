import { JsonView } from '@/client/components/json-view/json-view.js'
import { FormField } from '@/client/components/ui/form-field/form-field.js'
import { Label } from '@/client/components/ui/label.js'
import { Title } from '@/client/components/ui/title.js'
import {
  TToggleProps,
  ToggleForm,
} from '@/client/components/ui/toggle/toggle-form.js'
import '@/client/index.css'
import type { Story } from '@ladle/react'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export default {
  title: 'components / ui / Toggle form',
  args: {
    disabled: false,
    label: 'Label',
    value: false,
    required: true,
    variant: 'none',
    helper: 'Ajuda',
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
}

export const Default: Story<TToggleProps> = (props: TToggleProps) => {
  const form = useForm<{ input1: boolean }>({ defaultValues: { input1: true } })
  return (
    <>
      <Title>Toggle Form</Title>
      <div className="flex flex-col space-y-4">
        <FormField>
          <Label name="input1">Input [1]</Label>
          <ToggleForm {...form.register('input1')} />
        </FormField>

        <JsonView data={{ props, vlr: form.watch() }} />
      </div>
    </>
  )
}
