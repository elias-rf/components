import { useEffect, useState } from 'react'

export function useInput({
  value,
  onInput,
  onBlur,
  onChange,
}: {
  value: any
  onChange?: (e: string) => void
  onBlur?: (e: string) => void
  onInput?: (e: string) => void
}) {
  const [vlr, setVlr] = useState(value)
  const [dispInput, setDispInput] = useState(false)

  useEffect(() => {
    setVlr(value)
  }, [value])

  const sendValue = () => {
    if (dispInput) return
    setDispInput(true)
    onInput && onInput(vlr || '')
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const vlr = e.currentTarget.value
    setVlr(vlr)
    if (dispInput) setDispInput(false)
    onChange && onChange(vlr)
  }

  const handleBlur = () => {
    sendValue()
    onBlur && onBlur(vlr || '')
  }

  const handleKeyDown = (e: any) => {
    if (e.key.toLowerCase() === 'enter') {
      e.preventDefault()
      sendValue()
    }
  }

  return {
    value: vlr,
    handleChange,
    handleBlur,
    handleKeyDown,
  }
}
