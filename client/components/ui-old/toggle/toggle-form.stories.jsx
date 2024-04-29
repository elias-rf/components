import { JsonView } from '../../../components/json-view/json-view.jsx'
import { Label } from '../../../components/label/label.jsx'
import { Title } from '../../../components/title/title.jsx'
import { FormField } from '../../../components/ui-old/form-field/form-field.jsx'
import { ToggleForm } from '../../../components/ui-old/toggle/toggle-form.jsx'

import { useForm } from 'react-hook-form'

const meta = {
  component: ToggleForm,
  args: {
    disabled: false,
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
}

export default meta

export const Default = {
  render: (props) => {
    const form = useForm({
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
