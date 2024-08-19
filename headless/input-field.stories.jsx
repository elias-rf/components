import { useForm } from 'react-hook-form'
import { JsonView } from '../json-view/json-view.jsx'
import { InputField } from './input-field.jsx'

const meta = {
  component: InputField,
}

export default meta

export const Default = {
  render: () => {
    const frm = useForm({ defaultValues: { input1: 'hello', input2: 'world' } })

    return (
      <div className="flex flex-col gap-2">
        <InputField
          {...frm.register('input1')}
          label={'Label1'}
          description={'Description1'}
          errorMessage={'Error Message1'}
        />
        <InputField {...frm.register('input2')} />
        <JsonView data={frm.watch()} />
      </div>
    )
  },
}
