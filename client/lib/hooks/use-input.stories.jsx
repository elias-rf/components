import { useInput } from './use-input.mjs'

const meta = {
  component: InputAux,
}

export default meta

function InputAux({ onInput, onChange, onBlur }) {
  function handleInputEvent(value) {
    onInput(value)
  }

  function handleChangeEvent(value) {
    onChange(value)
  }

  function handleBlurEvent(value) {
    onBlur(value)
  }

  const register1 = useInput({
    onInput: handleInputEvent,
    onChange: handleChangeEvent,
    onBlur: handleBlurEvent,
  })
  const register2 = useInput({
    onInput: handleInputEvent,
    onChange: handleChangeEvent,
    onBlur: handleBlurEvent,
  })

  return (
    <>
      <input
        className="border border-black"
        {...register1.props}
      />
      <input
        className="border border-black"
        {...register2.props}
      />
    </>
  )
}

export const Default = {
  render: (props) => {
    return <InputAux {...props} />
  },
}
