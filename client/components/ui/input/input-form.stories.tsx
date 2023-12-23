import { JsonView } from '@/client/components/json-view/json-view.js'
import { Button } from '@/client/components/ui/button/button.js'
import { FormField } from '@/client/components/ui/form-field/form-field.js'
import { InputForm } from '@/client/components/ui/input/input-form.js'
import { Label } from '@/client/components/ui/label.js'
import { Title } from '@/client/components/ui/title.js'
import '@/client/index.css'
import type { Story } from '@ladle/react'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export default {
  title: 'Components/UI/input form',
}

export const Default: Story = (props) => {
  const form = useForm<{ input1: string; input2: string }>()
  const onSubmit: SubmitHandler<{ input1: string; input2: string }> = (data) =>
    console.log(data)

  return (
    <>
      <Title>Input Form</Title>
      <div className="flex flex-col space-y-4">
        <FormField>
          <Label name="input1">Input [1]</Label>
          <InputForm {...form.register('input1')} />
        </FormField>
        <FormField>
          <Label name="input2">Input [2]</Label>
          <InputForm {...form.register('input2')} />
        </FormField>
        <Button onClick={() => form.reset({ input1: '1', input2: '2' })}>
          Reset
        </Button>
        <Button onClick={form.handleSubmit(onSubmit)}>Submit</Button>
      </div>
      <JsonView data={{ props, vlr: form.watch() }} />
    </>
  )
}

Default.args = {
  label: 'Input text',
  helper: 'Mensagem',
  required: true,
  disabled: false,
}
Default.argTypes = {
  variant: {
    control: { type: 'select' },
    options: ['error', 'success', 'none'],
  },
}
