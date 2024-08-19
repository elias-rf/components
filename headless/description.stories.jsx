import { Field } from '@headlessui/react'
import { Description } from './description.jsx'

const meta = {
  component: Description,
}

export default meta

export const Default = {
  args: {},
  render: () => {
    return (
      <Field>
        <Description>Label</Description>
      </Field>
    )
  },
}
