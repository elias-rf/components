import { SortIcon } from '@/client/components/icons/sort-icon'
import { ComboboxItem } from '@/client/components/ui/combobox/combobox_item'
import { useCombobox } from '@/client/components/ui/combobox/use-combobox'
import { Label } from '@/client/components/ui/label'
import { cn } from '@/client/lib/cn'
import { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

function Combobox({
  label,
  position = 'left',
  options,
  value,
  onInput,
}: {
  label: string
  arrowIcon?: boolean
  position?: 'left' | 'right'
  value: string
  onInput: (value: string) => void
  options: { label: string; value: any }[]
}) {
  const ref = useRef(null)
  const cb = useCombobox({ value, options, onInput })

  useOnClickOutside(ref, () => {
    cb.showOptions.value = false
  })

  return (
    <>
      <div
        ref={ref}
        className="relative w-fit"
        onKeyUp={cb.handleKeys}
      >
        <Label id={cb.id}>{label}</Label>
        <div className="">
          <input
            value={cb.label.value}
            onChange={cb.handleChange}
            onBlur={cb.handleBlur}
            ref={cb.refInput}
            className="p-0 border"
          />
          <span
            className="align-middle"
            onClick={cb.handleShow}
          >
            <SortIcon direction="both" />
          </span>
        </div>

        <div
          id="dropdown"
          className={cn(
            'z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44  dark:bg-gray-700 ',
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
