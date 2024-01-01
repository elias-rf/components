import { SortIcon } from '@/client/components/icons/sort-icon.js'
import { ComboboxItem } from '@/client/components/ui-old/combo-box/combo-box-item.js'
import { useCombobox } from '@/client/components/ui-old/combo-box/use-combo-box.js'
import { themeInput } from '@/client/components/ui-old/theme-input.js'
import { cn } from '@/client/lib/cn.js'
import React, { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

type TComboboxProps = {
  className?: string
  disabled?: boolean
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
  options: [label: string, value: string][]
  position?: 'left' | 'right'
  variant?: 'success' | 'error'
}

const Item = ({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick: (e: any) => void
}) => {
  return (
    <div
      onClick={onClick}
      className="w-full border-b border-gray-100 rounded-t cursor-pointer hover:bg-teal-100"
    >
      <div className="relative flex items-center w-full p-2 pl-2 border-l-2 border-transparent hover:border-teal-100">
        <div className="flex items-center w-full">
          <div className="mx-2 leading-6 ">{children}</div>
        </div>
      </div>
    </div>
  )
}

const List = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute left-0 z-40 w-full overflow-y-auto bg-white rounded shadow max-h-select mt-14">
      <div className="flex flex-col w-full">{children}</div>
    </div>
  )
}

export const ComboboxForm = React.forwardRef<HTMLInputElement, TComboboxProps>(
  (
    {
      className,
      disabled,
      onBlur,
      onChange,
      options,
      position = 'left',
      variant,
      name,
    },
    ref
  ) => {
    const comboRef = useRef<HTMLInputElement>(null)
    const showOptions = useHookstate(false)
    const valueInput = useHookstate('')
    const labelInput = useHookstate('')

    React.useImperativeHandle(
      ref,
      () => comboRef.current as HTMLInputElement,
      []
    )

    function getLabel(vlr: string) {
      return options.find(([label, value]) => value === vlr)?.[0] || ''
    }

    React.useEffect(() => {
      valueInput.set(comboRef.current?.value as string)
      labelInput.set(getLabel(comboRef.current?.value as string))
    }, [comboRef.current?.value])

    function handleChange(value: string) {
      valueInput.set(value)
      labelInput.set(getLabel(value))
      onChange({
        target: { name, value },
      } as React.ChangeEvent<HTMLInputElement>)
      showOptions.set(false)
    }

    return (
      <>
        <div className="relative w-full">
          <input
            className="hidden"
            name={name}
            ref={comboRef}
          />
          <div
            className={cn(
              'flex h-8 w-full items-center rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
              {
                'cursor-not-allowed bg-gray-100 text-gray-600 dark:text-gray-300':
                  disabled,
              },
              {
                'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100':
                  variant === 'success',
              },
              {
                'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100':
                  variant === 'error',
              },
              className
            )}
          >
            <input
              className={cn(
                themeInput[variant || 'default'],
                'block h-8 w-full rounded-lg border px-1.5 text-sm',
                disabled ? themeInput.disabled : null,
                className
              )}
              disabled={disabled}
              id={name}
              value={labelInput.value}
              onChange={(e) => handleChange(e.target.value)}
            />
            <span
              className=""
              onClick={() => showOptions.set(!showOptions.value)}
            >
              <SortIcon direction="both" />
            </span>
          </div>
          <div
            id="dropdown"
            className={cn(
              'absolute z-10 w-full divide-y divide-gray-100 rounded-lg bg-white shadow  dark:bg-gray-700 ',
              {
                hidden: !showOptions.value,
                'end-0': position === 'right',
              }
            )}
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 ">
              {options.map(([label, value]) => (
                <li
                  key={value}
                  onClick={() => handleChange(value)}
                  className={cn(
                    'block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                  )}
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
)
