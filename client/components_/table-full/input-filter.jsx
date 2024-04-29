import React from 'react'

export function InputFilter({ value, name, onInput }) {
  const [vlr, setVlr] = React.useState(value)
  const [dispInput, setDispInput] = React.useState(false)

  const sendValue = () => {
    if (dispInput) return
    setDispInput(true)
    onInput && onInput(vlr, name)
  }

  const handleChange = (e) => {
    const vlr = e.currentTarget.value
    setVlr(vlr)
    if (dispInput) setDispInput(false)
  }

  const handleBlur = () => {
    sendValue()
  }

  const handleKeyDown = (e) => {
    if (e.key.toLowerCase() === 'enter') {
      e.preventDefault()
      sendValue()
    }
  }

  return (
    <input
      value={vlr}
      name={name}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      onChange={handleChange}
      className="w-full p-1 text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      autoComplete="off"
    />
  )
}
