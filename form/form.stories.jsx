import * as Ariakit from '@ariakit/react'
import { Heading } from '../heading/heading.jsx'
import { Form } from './form'
import { FormCheckbox } from './form-checkbox.jsx'
import { FormError } from './form-error.jsx'
import { FormField } from './form-field.jsx'
import { FormInput } from './form-input.jsx'
import { FormLabel } from './form-label.jsx'
import { FormReset } from './form-reset.jsx'
import { FormSubmit } from './form-submit.jsx'

const meta = {
  component: Form,
}

export default meta

export const Default = {
  args: {},
  render: (props) => {
    const form = Ariakit.useFormStore({
      defaultValues: { name: '1', email: '2', salvar: false },
    })

    form.useSubmit(async (state) => {
      alert(JSON.stringify(state.values))
      console.log(
        form.setValues({ name: Math.random(), email: '2', salvar: false })
      )
    })

    return (
      <Form store={form}>
        <Heading>Add new participant</Heading>
        <FormField>
          <FormLabel name={'name'}>Name</FormLabel>
          <FormInput name={'name'} />
          <FormError name={'name'} />
        </FormField>
        <FormField>
          <FormLabel name={'email'}>Email</FormLabel>
          <FormInput name={'email'} />
          <FormError name={'email'} />
        </FormField>
        <FormField>
          <FormLabel name={'salvar'}>Salvar login</FormLabel>
          <FormCheckbox name={'salvar'} />
          <FormError name={'salvar'} />
        </FormField>
        <div className="buttons">
          <FormReset>Reset</FormReset>
          <FormSubmit>Submit</FormSubmit>
        </div>
      </Form>
    )
  },
}
