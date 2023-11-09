import { useStateMutable } from '@/client/lib/hooks/use-state-mutable'
import { useId, useRef } from 'react'

type TOptions = { label: string; value: string }[]
export type TUseCombobox = {
  opened: boolean
  mode: 'single' | 'multi'
}

function getLabel(value: string, options: TOptions) {
  return options.find((opt) => opt.value === value)?.label || ''
}

function getValue(label: string, options: TOptions) {
  const lbl = label.toLowerCase()
  return (
    options.find((option) => option.label.toLowerCase() === lbl)?.value || ''
  )
}

function getOptions(label: string, options: TOptions) {
  const lbl = label.toLowerCase()
  return options.filter((option) => option.label.toLowerCase().includes(lbl))
}

function getIndexSelection(selected: string, options: TOptions) {
  return options.findIndex((option) => option.value === selected)
}

export function useCombobox({
  value,
  options,
  onInput,
}: {
  value: string
  options: TOptions
  onInput: (value: string) => void
}) {
  const refInput = useRef<any>(null)
  const id = useId()
  const cbVlr = useStateMutable({ value })
  const cbLbl = useStateMutable({ value: getLabel(value, options) })
  const cbOpt = useStateMutable({ value: options })
  const cbShowOptions = useStateMutable({ value: false })
  const cbSelected = useStateMutable({ value })

  function handleChange(label: any) {
    const lbl = typeof label === 'string' ? label : label.target.value
    const vlr = getValue(lbl, options)
    cbLbl.value = lbl
    cbVlr.value = vlr
    cbSelected.value = vlr
    cbOpt.value = getOptions(lbl, options)
    cbShowOptions.value = vlr === ''
    if (vlr !== '') onInput(vlr)
  }

  function handleKeys(key: any) {
    if (['ArrowUp', 'ArrowDown'].includes(key.code)) {
      let index = getIndexSelection(cbSelected.value, cbOpt.value)
      if (key.code === 'ArrowDown') {
        index++
        if (index >= cbOpt.value.length) index = 0
      }
      if (key.code === 'ArrowUp') {
        index--
        if (index < 0) index = cbOpt.value.length - 1
      }
      cbSelected.value = cbOpt.value[index].value
      cbLbl.value = cbOpt.value[index].label
    }
    if (key.code === 'Enter') {
      handleChange(getLabel(cbSelected.value, cbOpt.value))
    }
  }

  function handleBlur() {
    if (cbSelected.value !== '') {
      handleChange(getLabel(cbSelected.value, options))
    }
  }

  function handleShow() {
    if (cbShowOptions.value) {
      cbShowOptions.value = false
    } else {
      cbShowOptions.value = true
      if (refInput.current) {
        refInput.current.focus()
        refInput.current.select()
      }
    }
  }

  return {
    id,
    refInput,
    value: cbVlr,
    label: cbLbl,
    options: cbOpt,
    showOptions: cbShowOptions,
    selected: cbSelected,
    handleChange,
    handleKeys,
    handleBlur,
    handleShow,
  }
}
