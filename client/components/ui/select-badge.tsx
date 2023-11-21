import { Chip } from '@/client/components/ui/chip.js'
import { Select } from '@/client/components/ui/select/select.js'
import { useEffect, useState } from 'react'

export type TSelectBadgeProps = {
  disabled?: boolean
  helper?: string
  label?: string
  onChange?: (value: string[]) => void
  onInput?: (value: string[]) => void
  options: { label: string; value: any }[]
  required?: boolean
  value: string[]
  variant?: 'success' | 'error'
  id?: string
}

export function SelectBadge({
  disabled = false,
  onChange,
  onInput,
  options,
  value,
  variant,
  id,
}: TSelectBadgeProps) {
  const [valueState, setValueState] = useState<string>('')
  const [optionsList, setOptionsList] = useState<{ [key: string]: any }>({})

  useEffect(() => {
    const response: { [key: string]: any } = {}
    for (const option of options) {
      response[option.value] = option.label
    }
    setOptionsList(response)
  }, [options])

  function handleChange(valueSelect: string) {
    setValueState(valueSelect)
    if (valueSelect === '' || value.includes(valueSelect)) return
    value.push(valueSelect)
    onChange && onChange(value)
    onInput && onInput(value)
  }

  function handleClose(valueChip: string) {
    if (disabled) return
    setValueState('')
    const response = value.filter((val) => val !== valueChip)
    onChange && onChange(response)
    onInput && onInput(response)
  }

  return (
    <>
      <div className="flex flex-row w-full h-8 gap-2">
        <div className="flex content-center gap-2">
          {value.map((vlr) => (
            <Chip
              key={vlr}
              onClose={() => handleClose(vlr)}
              onClick={() => handleClose(vlr)}
            >
              {optionsList[vlr] || vlr}
            </Chip>
          ))}
        </div>
        <Select
          disabled={disabled}
          onChange={handleChange}
          value={valueState}
          variant={variant}
          id={id}
        >
          {options.map((option) => (
            <Select.Option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </Select.Option>
          ))}
        </Select>
      </div>
    </>
  )
}
