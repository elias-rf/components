import { useForm } from 'react-hook-form'
import { JsonView } from '../../../json-view/json-view.jsx'
import { TextForm } from './text-form.jsx'

const meta = {
  component: TextForm,
}

export default meta

export const Default = {
  args: {
    isDisabled: false,
    isInvalid: false,
  },
  render: (args) => {
    const frm = useForm({
      defaultValues: {
        check1: 'ok',
        check2: '',
      },
    })
    return (
      <>
        <TextForm
          {...args}
          control={frm.control}
          name="check1"
          rules={{ validate: (value) => value.length >= 2 }}
        >
          Checkbox 1
        </TextForm>
        <TextForm
          {...args}
          control={frm.control}
          name="check2"
          rules={{ validate: (value) => value.length >= 2 }}
        >
          Checkbox 2
        </TextForm>
        <JsonView data={frm.watch()} />
      </>
    )
  },
}
