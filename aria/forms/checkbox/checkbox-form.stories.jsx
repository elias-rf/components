import { useForm } from 'react-hook-form'
import { JsonView } from '../../../json-view/json-view.jsx'
import { CheckboxForm } from './checkbox-form'

const meta = {
  component: CheckboxForm,
}

export default meta

export const Default = {
  args: {},
  render: (args) => {
    const frm = useForm({
      defaultValues: {
        check1: true,
        check2: false,
      },
    })
    return (
      <>
        <CheckboxForm
          {...args}
          control={frm.control}
          name="check1"
          rules={{ validate: (value) => value === true }}
        >
          Checkbox 1
        </CheckboxForm>
        <CheckboxForm
          {...args}
          control={frm.control}
          name="check2"
          rules={{ validate: (value) => value === false }}
        >
          Checkbox 2
        </CheckboxForm>
        <JsonView data={frm.watch()} />
      </>
    )
  },
}
