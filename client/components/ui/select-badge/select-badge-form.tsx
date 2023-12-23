import { ChevronIcon } from '@/client/components/icons/chevron-icon.js'
import { CloseIcon } from '@/client/components/icons/close-icon.js'
import { useHookstate } from '@hookstate/core'

import React from 'react'

type TSelectBadgeProps = {
  className?: string
  disabled?: boolean
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
  type?: string
  variant?: 'success' | 'error'
  options: [label: string, value: string][]
}

const Pill = ({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick: () => void
}) => {
  return (
    <div className="m-1 flex items-center justify-center rounded-full border border-teal-300 bg-teal-100 px-2 text-teal-700 ">
      <div className="max-w-full flex-initial text-xs ">{children}</div>
      <div
        onClick={onClick}
        className="flex"
      >
        <CloseIcon className="ml-2 h-4 w-4 cursor-pointer hover:text-teal-400" />
      </div>
    </div>
  )
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
      className="w-full cursor-pointer rounded-t border-b border-gray-100 hover:bg-teal-100"
    >
      <div className="relative flex w-full items-center border-l-2 border-transparent p-2 pl-2 hover:border-teal-100">
        <div className="flex w-full items-center">
          <div className="mx-2 leading-6 ">{children}</div>
        </div>
      </div>
    </div>
  )
}

const List = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-h-select absolute left-0 z-40 mt-14 w-full overflow-y-auto rounded bg-white shadow">
      <div className="flex w-full flex-col">{children}</div>
    </div>
  )
}

const InputPills = ({
  children,
  showList,
}: {
  children: React.ReactNode
  showList: any
}) => {
  return (
    <div className="w-full">
      <div className="my-1 flex rounded border border-gray-200 bg-white ">
        <div className="flex flex-auto flex-wrap">{children}</div>
        <div className="flex w-8 items-center border-l border-gray-200 py-1 pl-2 pr-1 text-gray-300">
          <button
            onClick={() => {
              showList.set(!showList.value)
            }}
            className="h-6 w-6 cursor-pointer text-gray-600 outline-none focus:outline-none"
          >
            <ChevronIcon
              variant={showList.value ? 'up' : 'down'}
              className="h-5 w-5"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export const SelectBadgeForm = React.forwardRef<
  HTMLInputElement,
  TSelectBadgeProps
>(({ name, onChange, onBlur, options }, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const showList = useHookstate(false)
  const valueFilter = useHookstate('')
  const valueInput = useHookstate('')
  const arrayInput = useHookstate<string[]>([])

  React.useImperativeHandle(
    ref,
    () => inputRef.current || ({} as HTMLInputElement),
    []
  )

  React.useEffect(() => {
    if (valueInput.get() === '') {
      arrayInput.set([])
      return
    }
    arrayInput.set(valueInput.value.split(',').map((item) => item.trim()))
  }, [valueInput.value])

  React.useEffect(() => {
    if (inputRef.current) valueInput.set(inputRef.current?.value)
  }, [inputRef.current?.value])

  function handleValue() {
    onChange({
      target: { value: valueInput.value, name },
    } as React.ChangeEvent<HTMLInputElement>)
  }

  return (
    <div className="w-full ">
      <input
        className="hidden"
        name={name}
        ref={inputRef}
      />
      <div className="relative flex flex-col ">
        <InputPills showList={showList}>
          <>
            {arrayInput.get().map((item) => {
              const [label, value] =
                options.find(([_, value]) => value === item) || []
              return (
                <Pill
                  key={value}
                  onClick={() => {
                    const array = arrayInput
                      .get()
                      .filter((item) => item !== value)
                    valueInput.set(array.join(','))
                    showList.set(false)
                    handleValue()
                  }}
                >
                  {label}
                </Pill>
              )
            })}
            <div className="flex-1">
              <input
                value={valueFilter.get()}
                onChange={(e) => {
                  showList.set(true)
                  valueFilter.set(e.target.value)
                }}
                className="h-full w-full appearance-none bg-transparent p-1 px-2 text-gray-800 outline-none"
              />
            </div>
          </>
        </InputPills>
        {showList.get() ? (
          <List>
            {options
              .filter(([label, value]) => {
                return (
                  !arrayInput.get().includes(value) &&
                  label.toLowerCase().includes(valueFilter.get().toLowerCase())
                )
              })
              .map(([label, value]) => (
                <Item
                  key={value}
                  onClick={() => {
                    const array = [...arrayInput.value]
                    if (!array.includes(value)) {
                      array.push(value)
                      valueInput.set(array.join(','))
                    }
                    showList.set(false)
                    handleValue()
                  }}
                >
                  {label}
                </Item>
              ))}
          </List>
        ) : null}
      </div>
    </div>
  )
})
