import { useForm } from 'react-hook-form'
import { Button } from '../../button/button.jsx'
import { FormInput } from '../../form/form-input.jsx'
import { FormLabel } from '../../form/form-label.jsx'
import { JsonView } from '../../json-view/json-view.jsx'
import { Title } from '../../title/title.jsx'
import { InputForm } from './input-form.jsx'

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
          <FormInput>
            <FormLabel htmlFor="input1">Input [1]</FormLabel>
            <InputForm {...form.register('input1')} />
          </FormInput>
          <FormInput>
            <FormLabel htmlFor="input2">Input [2]</FormLabel>
            <InputForm {...form.register('input2')} />
          </FormInput>
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
