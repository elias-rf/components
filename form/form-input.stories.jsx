import React from 'react'
import { useForm } from 'react-hook-form'
import { JsonView } from '../json-view/json-view.jsx'
import { FormInput } from './form-input.jsx'

export default {
  component: FormInput,
  args: {
    disabled: false,
  },
}

export const Default = {
  render: (props) => {
    const frm = useForm({ defaultValues: { input1: 'test1', input2: 'test2' } })
    const [vlr, setVlr] = React.useState('')
    const onSubmit = (data) => setVlr(data)

    return (
      <div>
        <form onSubmit={frm.handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-4">
            <FormInput
              name="input1"
              control={frm.control}
            />
            <FormInput
              name="input2"
              control={frm.control}
            />
            <input
              type="submit"
              value="Submit"
            />
          </div>
        </form>
        <JsonView data={{ props, vlr }} />
      </div>
    )
  },
}
