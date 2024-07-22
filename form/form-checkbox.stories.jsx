import React from 'react'
import { useForm } from 'react-hook-form'
import { JsonView } from '../json-view/json-view.jsx'
import { FormCheckbox } from './form-checkbox.jsx'

export default {
  component: FormCheckbox,
  args: {
    disabled: false,
  },
}

export const Default = {
  render: (props) => {
    const frm = useForm({ defaultValues: { input1: true, input2: false } })
    const [vlr, setVlr] = React.useState({})
    const onSubmit = (data) => setVlr(data)

    return (
      <div>
        <form onSubmit={frm.handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-4">
            <FormCheckbox
              name="input1"
              control={frm.control}
              description={`This is ${frm.getValues().input1}`}
            />
            <FormCheckbox
              name="input2"
              control={frm.control}
              errorMessage="This is an error message"
            />
          </div>
        </form>
        <JsonView data={{ form: frm.watch() }} />
      </div>
    )
  },
}
