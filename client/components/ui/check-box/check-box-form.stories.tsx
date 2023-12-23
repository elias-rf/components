import { JsonView } from '@/client/components/json-view/json-view.js'
import { CheckBoxForm } from '@/client/components/ui/check-box/check-box-form.js'
import {
  CheckBox,
  TCheckBoxProps,
} from '@/client/components/ui/check-box/check-box.js'
import { Title } from '@/client/components/ui/title.js'
import '@/client/index.css'
import { Story, action } from '@ladle/react'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export default {
  title: 'components / ui / check Box form',
  args: {
    disabled: false,
    variant: 'none',
    name: 'name',
    id: 'id',
  },
}

export const Default: Story<TCheckBoxProps> = (props: TCheckBoxProps) => {
  const form = useForm<{ input1: boolean }>({ defaultValues: { input1: true } })
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
}
