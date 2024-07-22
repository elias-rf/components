import { useForm } from 'react-hook-form'
import { JsonView } from '../../../json-view/json-view.jsx'
import { ComboBoxForm } from './combo-box-form.jsx'
import { ComboBoxItem } from './combo-box-item.jsx'

const meta = {
  component: ComboBoxForm,
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
        check1: 'mint',
        check2: 'chocolate',
      },
    })
    return (
      <>
        <ComboBoxForm
          {...args}
          control={frm.control}
          name="check1"
          rules={{ validate: (value) => value.length >= 2 }}
        >
          <ComboBoxItem id="chocolate">Chocolate</ComboBoxItem>
          <ComboBoxItem id="mint">Mint</ComboBoxItem>
          <ComboBoxItem>Strawberry</ComboBoxItem>
          <ComboBoxItem>Vanilla</ComboBoxItem>
        </ComboBoxForm>
        <ComboBoxForm
          {...args}
          control={frm.control}
          name="check2"
          rules={{ validate: (value) => value.length >= 2 }}
        >
          <ComboBoxItem id="chocolate">Chocolate</ComboBoxItem>
          <ComboBoxItem id="mint">Mint</ComboBoxItem>
          <ComboBoxItem>Strawberry</ComboBoxItem>
          <ComboBoxItem>Vanilla</ComboBoxItem>
        </ComboBoxForm>
        <JsonView data={frm.watch()} />
      </>
    )
  },
}
