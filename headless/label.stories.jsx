import { Field } from '@headlessui/react'
import { Label } from './label'

const meta = {
  component: Label,
}

export default meta

export const Default = {
  args: {},
  render: () => {
    return (
      <Field>
        <Label>Label</Label>
      </Field>
    )
  },
}
