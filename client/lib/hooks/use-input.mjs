import React from 'react'

export const useInput = ({ onInput, onChange, onBlur }, initialValue = '') => {
  const [value, setValue] = React.useState(initialValue)
  const [dispInput, setDispInput] = React.useState(false)

  const sendValue = () => {
    if (dispInput) return
    setDispInput(true)
    onInput && onInput(value)
  }

  const handleChange = (e) => {
    const vlr = e.currentTarget.value
    setValue(vlr)
    if (dispInput) setDispInput(false)
    onChange && onChange(vlr)
  }

  const handleBlur = () => {
    sendValue()
    onBlur && onBlur(value)
  }

  const handleKeyDown = (e) => {
    if (e.key.toLowerCase() === 'enter') {
      e.preventDefault()
      sendValue()
    }
  }

  return {
    setValue,
    value,
    props: {
      onChange: handleChange,
      onBlur: handleBlur,
      onKeyDown: handleKeyDown,
      value,
    },
  }
}
