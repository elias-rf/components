import { SortIcon } from '@/client/components/icons/sort-icon.js'
import { ComboboxItem } from '@/client/components/ui/combobox/combobox-item.js'
import { useCombobox } from '@/client/components/ui/combobox/use-combobox.js'
import { themeInput } from '@/client/components/ui/theme-input.js'
import { cn } from '@/client/lib/cn.js'
import { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

type TComboboxProps = {
  className?: string
  disabled?: boolean
  id?: string
  name?: string
  onChange?: (value: string) => void
  onInput?: (value: string, name: string) => void
  options: { label: string; value: any }[]
  position?: 'left' | 'right'
  value: string
  variant?: 'success' | 'error'
}

function Combobox({
  className,
  disabled,
  onChange,
  onInput,
  options,
  position = 'left',
  value,
  variant,
  id,
  name,
}: TComboboxProps) {
  function handleInput(value: string) {
    onInput && onInput(value, name || '')
  }
  const ref = useRef(null)
  const cb = useCombobox({ value, options, onInput: handleInput, onChange })

  useOnClickOutside(ref, () => {
    cb.showOptions.value = false
  })

  return (
    <>
      <div
        ref={ref}
        className="relative w-full"
        onKeyUp={cb.handleKeys}
      >
        <div
          className={cn(
            'h-8 flex items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
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
            },
            className
          )}
        >
          <input
            value={cb.label.value}
            onChange={cb.handleChange}
            onBlur={cb.handleBlur}
            ref={cb.refInput}
            className={cn(
              themeInput[variant || 'default'],
              'px-1.5 h-8 border text-sm rounded-lg block w-full',
              disabled ? themeInput.disabled : null,
              className
            )}
            disabled={disabled}
            id={id}
            name={name}
          />
          <span
            className=""
            onClick={cb.handleShow}
          >
            <SortIcon direction="both" />
          </span>
        </div>

        <div
          id="dropdown"
          className={cn(
            'w-full z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 ',
            { hidden: !cb.showOptions.value, 'end-0': position === 'right' }
          )}
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 ">
            {cb.options.value.map(
              (option: { label: string; value: string }) => (
                <ComboboxItem
                  key={option.value}
                  onClick={() => cb.handleChange(option.label)}
                  selected={cb.selected.value === option.value}
                >
                  {option.label}
                </ComboboxItem>
              )
            )}
          </ul>
        </div>
      </div>
    </>
  )
}

export { Combobox }
