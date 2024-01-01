import type { Meta, StoryObj } from '@storybook/react'
import { useInput } from './use-input.js'

const meta: Meta<typeof InputAux> = {
  component: InputAux,
}

export default meta
type Story = StoryObj<typeof InputAux>

function InputAux({
  onInput,
  onChange,
  onBlur,
}: {
  onInput: (e: any) => void
  onChange: (e: any) => void
  onBlur: (e: any) => void
}) {
  function handleInputEvent(value: string) {
    onInput(value)
  }

  function handleChangeEvent(value: string) {
    onChange(value)
  }

  function handleBlurEvent(value: string) {
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

export const Default: Story = {
  render: (props) => {
    return <InputAux {...props} />
  },
}
