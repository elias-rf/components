import { useForm } from 'react-hook-form'
import { JsonView } from '../json-view/json-view.jsx'
import { CheckboxField } from './checkbox-field.jsx'

const meta = {
  component: CheckboxField,
}

export default meta

export const Default = {
  render: () => {
    const frm = useForm({ defaultValues: { input1: true, input2: false } })

    return (
      <div className="flex flex-col gap-2">
        <CheckboxField
          {...frm.register('input1')}
          label={'Label1'}
          description={'Description1'}
          errorMessage={'Error Message1'}
        />
        <CheckboxField {...frm.register('input2')} />
        <JsonView data={frm.watch()} />
      </div>
    )
  },
}
