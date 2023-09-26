import type { TFormJsonField } from '@/client/components/inputs'
import { FormJson, Switch, TextField } from '@/client/components/inputs'
import { Divider } from '@mui/material'
import { day } from '@/utils/date/day'
import type { Story } from '@ladle/react'
import { JsonViewer } from '@textea/json-viewer'
import React from 'react'
import { useForm } from 'react-hook-form'

function InputAux() {
  const [required, setRequired] = React.useState(true)
  const [disabled, setDisabled] = React.useState(false)

  const form = useForm({
    mode: 'onTouched',
  })

  const watchAllFields = form.watch()

  const fieldsJson: TFormJsonField[] = [
    {
      name: 'TextField',
      component: 'TextField',
      label: 'TextField',
      defaultValue: 'a',
      required,
      className: 'xs:col-span-2',

      rules: {
        required: 'Requerido',
        minLength: { value: 5, message: 'Mínimo 5 caracteres' },
      },
    },
    {
      name: 'NumberField',
      component: 'NumberField',
      label: 'NumberField',
      defaultValue: '1.1',
      required,
      className: 'xs:col-span-2',
      rules: {
        validate: (value: any) => {
          if (value >= 1 && value <= 2) {
            return true
          }
          return 'Deve estar entre 1 e 2'
        },
      },
    },
    {
      name: 'DateField',
      component: 'DateField',
      label: 'DateField',
      defaultValue: '01012022',
      required,
      className: 'xs:col-span-2',
      rules: {
        validate: (value: any) => {
          console.log(value)
          if (day(value, 'DD/MM/YYYY', true).isValid()) {
            return true
          }
          return 'Data inválida'
        },
      },
    },
    {
      name: 'TextFieldMultiple',
      component: 'TextFieldMultiple',
      label: 'TextFieldMultiple',
      defaultValue: ['a1'],
      required,
      items: ['a1', 'a2'],
      labels: ['A1', 'A2'],
      className: 'xs:col-span-5',
    },
    {
      name: 'Select',
      component: 'Select',
      label: 'Select',
      defaultValue: 'a1',
      required,
      items: ['a1', 'a2', 'a3'],
      labels: ['A1', 'A2', 'A3'],
      className: 'xs:col-span-3',
    },
    {
      name: 'RadioButton',
      component: 'RadioButton',
      label: 'RadioButton',
      defaultValue: 'a1',
      required,
      items: ['a1', 'a2', 'a3'],
      labels: ['A1', 'A2', 'A3'],
      className: 'xs:col-span-3',
    },
    {
      name: 'CheckBox',
      component: 'CheckBox',
      label: 'CheckBox',
      defaultValue: true,
      required,
      className: 'xs:col-span-3',
    },
    {
      name: 'Switch',
      component: 'Switch',
      label: 'Switch',
      defaultValue: true,
      required,
      className: 'xs:col-span-3',
    },
  ]

  return (
    <>
      <FormJson
        form={form}
        fields={fieldsJson}
      />

      <Divider />
      <Switch
        label="required"
        value={required}
        onChange={(e: any) => setRequired(e)}
      />
      <Switch
        label="disabled"
        value={disabled}
        onChange={(e: any) => setDisabled(e)}
      />
      <JsonViewer value={{ disabled, values: watchAllFields }} />
    </>
  )
}

export const Default: Story = () => {
  return <InputAux />
}
