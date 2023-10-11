import { Chip } from '@/client/components/ui/chip'
import { Label } from '@/client/components/ui/label'
import { Select } from '@/client/components/ui/select'
import { useEffect, useId, useState } from 'react'

export type TSelectBadgeProps = {
  disabled?: boolean
  helper?: string
  label?: string
  onBlur?: (e: any) => void
  onChange?: (value: string[]) => void
  options: [label: string, value: any][]
  required?: boolean
  value: string[]
  variant?: 'success' | 'error' | 'none'
}

export function SelectBadge({
  disabled = false,
  helper,
  label,
  onBlur,
  onChange,
  options,
  required = false,
  value,
  variant = 'none',
}: TSelectBadgeProps) {
  const id = useId()
  const [valueState, setValueState] = useState<string>('')
  const [optionsList, setOptionsList] = useState<{ [key: string]: any }>({})

  useEffect(() => {
    const response: { [key: string]: any } = {}
    for (const option of options) {
      response[option[1]] = option[0]
    }
    setOptionsList(response)
  }, [options])

  function handleChange(valueSelect: string) {
    setValueState(valueSelect)
    if (valueSelect === '' || value.includes(valueSelect)) return
    value.push(valueSelect)
    onChange && onChange(value)
  }

  function handleClose(valueChip: string) {
    setValueState('')
    const response = value.filter((val) => val !== valueChip)
    onChange && onChange(response)
  }

  return (
    <>
      <Label
        id={id}
        required={required}
        disabled={disabled}
        variant={variant}
        className="ml-2"
      >
        {label}
      </Label>
      <div className="flex flex-row w-full space-x-2">
        <div className="flex flex-wrap content-center gap-2">
          {value.map((vlr) => (
            <Chip
              key={vlr}
              onClose={() => handleClose(vlr)}
              onClick={() => handleClose(vlr)}
            >
              {optionsList[vlr]}
            </Chip>
          ))}
        </div>
        <Select
          disabled={disabled}
          helper={helper}
          onBlur={onBlur}
          onChange={handleChange}
          options={options}
          required={required}
          value={valueState}
          variant={variant}
        />
      </div>
    </>
  )
}
