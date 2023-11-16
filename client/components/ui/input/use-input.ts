import { useEffect, useState } from 'react'

export function useInput({
  value,
  onInput,
  onChange,
}: {
  value: any
  onChange?: (value: string, name: string) => void
  onInput?: (value: string, name: string) => void
}) {
  const [vlr, setVlr] = useState(value)
  const [name, setName] = useState('')
  const [dispInput, setDispInput] = useState(false)

  useEffect(() => {
    setVlr(value)
  }, [value])

  const sendValue = () => {
    if (dispInput) return
    setDispInput(true)
    onInput && onInput(vlr || '', name)
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const vlr = e.currentTarget.value
    if (!name) setName(e.currentTarget.name || e.currentTarget.id)
    setVlr(vlr)
    if (dispInput) setDispInput(false)
    onChange && onChange(vlr, name)
  }

  const handleBlur = (e: any) => {
    if (!name) setName(e.currentTarget.name || e.currentTarget.id)

    sendValue()
  }

  const handleKeyDown = (e: any) => {
    if (!name) setName(e.currentTarget.name || e.currentTarget.id)

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
