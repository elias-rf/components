import type { Story } from '@ladle/react'
import { useInput } from './use-input.js'

export default {
  title: 'lib/hooks/use-input',
}

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

export const Default: Story<{
  onInput: () => void
  onChange: () => void
  onBlur: () => void
}> = (props) => {
  return <InputAux {...props} />
}

Default.argTypes = {
  onInput: {
    action: 'clicked',
  },
  onChange: {
    action: 'clicked',
  },
  onBlur: {
    action: 'clicked',
  },
}
