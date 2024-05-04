import { Button } from '../button/button.jsx'
import { JsonView } from '../json-view/json-view.jsx'
import { Label } from '../label/label.jsx'
import { Title } from '../title/title.jsx'
import { FormField } from '../ui-old/form-field/form-field.jsx'
import { InputForm } from '../ui-old/input/input-form.jsx'
import { useForm } from 'react-hook-form'

const meta = {
  component: InputForm,
  args: {
    disabled: false,
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['error', 'success', 'none'],
    },
  },
}

export default meta

export const Default = {
  render: (props) => {
    const form = useForm()
    const onSubmit = (data) => console.log(data)

    return (
      <>
        <Title>Input Form</Title>
        <div className="flex flex-col space-y-4">
          <FormField>
            <Label htmlFor="input1">Input [1]</Label>
            <InputForm {...form.register('input1')} />
          </FormField>
          <FormField>
            <Label htmlFor="input2">Input [2]</Label>
            <InputForm {...form.register('input2')} />
          </FormField>
          <Button onClick={() => form.reset({ input1: '1', input2: '2' })}>
            Reset
          </Button>
          <Button onClick={form.handleSubmit(onSubmit)}>Submit</Button>
        </div>
        <JsonView data={{ props, vlr: form.watch() }} />
      </>
    )
  },
}
