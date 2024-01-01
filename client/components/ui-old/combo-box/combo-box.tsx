import { SortIcon } from '@/client/components/icons/sort-icon.js'
import { ComboboxItem } from '@/client/components/ui-old/combo-box/combo-box-item.js'
import { useCombobox } from '@/client/components/ui-old/combo-box/use-combo-box.js'
import { themeInput } from '@/client/components/ui-old/theme-input.js'
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
            value={cb.label.value}
            onChange={cb.handleChange}
            onBlur={cb.handleBlur}
            ref={cb.refInput}
            className={cn(
              themeInput[variant || 'default'],
              'block h-8 w-full rounded-lg border px-1.5 text-sm',
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
            'absolute z-10 w-full divide-y divide-gray-100 rounded-lg bg-white shadow  dark:bg-gray-700 ',
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
