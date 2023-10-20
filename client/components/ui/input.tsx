import { Helper } from '@/client/components/ui/helper'
import { Label } from '@/client/components/ui/label'
import { cn } from '@/client/lib/cn'
import React from 'react'

type TInputProps = {
  label?: string
  helper?: string
  onChange?: (e: string) => void
  onBlur?: (e: any) => void
  onInput?: (e: any) => void
  value?: string
  type?: string
  required?: boolean
  disabled?: boolean
  variant?: 'success' | 'error'
}

export const Input = React.forwardRef<HTMLInputElement, TInputProps>(
  (
    {
      label,
      value,
      type = 'text',
      helper = '',
      required = false,
      disabled = false,
      onChange,
      onBlur,
      onInput,
      variant,
    },
    ref
  ) => {
    const id = React.useId()
    const [vlr, setVlr] = React.useState(value)
    const [dispInput, setDispInput] = React.useState(false)

    React.useEffect(() => {
      setVlr(value)
    }, [value])

    const sendValue = () => {
      if (dispInput) return
      setDispInput(true)
      onInput && onInput(vlr)
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const vlr = e.currentTarget.value
      setVlr(vlr)
      if (dispInput) setDispInput(false)
      onChange && onChange(vlr)
    }

    const handleBlur: React.FocusEventHandler<HTMLInputElement> = () => {
      sendValue()
      onBlur && onBlur(vlr)
    }

    const handleKeyDown = (e: any) => {
      if (e.key.toLowerCase() === 'enter') {
        e.preventDefault()
        sendValue()
      }
    }

    return (
      <div>
        <Label
          id={id}
          required={required}
          disabled={disabled}
          variant={variant}
        >
          {label}
        </Label>

        <input
          type={type}
          id={id}
          className={cn(
            'p-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
            {
              'text-gray-600 bg-gray-100 cursor-not-allowed dark:text-gray-300':
                disabled,
            },
            {
              'bg-green-50 border-green-500 text-green-900 placeholder-green-700 focus:ring-green-500 focus:border-green-500 dark:bg-green-100 dark:border-green-400':
                variant === 'success',
            },
            {
              'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400':
                variant === 'error',
            }
          )}
          value={vlr}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          ref={ref}
        />
        <Helper variant={variant}>{helper}</Helper>
      </div>
    )
  }
)

Input.displayName = 'Input'
