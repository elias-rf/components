import React from 'react'

type InputFilterProps = {
  value: string
  name: string
  onInput: (name: string, value: string) => void
}

export function InputFilter({ value, name, onInput }: InputFilterProps) {
  const [vlr, setVlr] = React.useState(value)
  const [dispInput, setDispInput] = React.useState(false)

  const sendValue = () => {
    if (dispInput) return
    setDispInput(true)
    onInput && onInput(vlr, name)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vlr = e.currentTarget.value
    setVlr(vlr)
    if (dispInput) setDispInput(false)
  }

  const handleBlur = () => {
    sendValue()
  }

  const handleKeyDown = (e: any) => {
    if (e.key.toLowerCase() === 'enter') {
      e.preventDefault()
      sendValue()
    }
  }

  return (
    <input
      value={vlr}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      onChange={handleChange}
      className="w-full p-1 text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
    />
  )
}
