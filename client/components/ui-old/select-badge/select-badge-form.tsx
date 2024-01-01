import { ChevronIcon } from '@/client/components/icons/chevron-icon.js'
import { CloseIcon } from '@/client/components/icons/close-icon.js'
import { useState } from '@/client/lib/hooks/use-state.js'
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
    <div className="flex items-center justify-center px-2 m-1 text-teal-700 bg-teal-100 border border-teal-300 rounded-full ">
      <div className="flex-initial max-w-full text-xs ">{children}</div>
      <div
        onClick={onClick}
        className="flex"
      >
        <CloseIcon className="w-4 h-4 ml-2 cursor-pointer hover:text-teal-400" />
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

const InputPills = ({
  children,
  showList,
}: {
  children: React.ReactNode
  showList: any
}) => {
  return (
    <div className="w-full">
      <div className="flex my-1 bg-white border border-gray-200 rounded ">
        <div className="flex flex-wrap flex-auto">{children}</div>
        <div className="flex items-center w-8 py-1 pl-2 pr-1 text-gray-300 border-l border-gray-200">
          <button
            onClick={() => {
              showList.set(!showList.value)
            }}
            className="w-6 h-6 text-gray-600 outline-none cursor-pointer focus:outline-none"
          >
            <ChevronIcon
              variant={showList.value ? 'up' : 'down'}
              className="w-5 h-5"
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
  const showList = useState(false)
  const valueFilter = useState('')
  const valueInput = useState('')
  const arrayInput = useState([] as string[])

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
    arrayInput.set(
      valueInput
        .get()
        .split(',')
        .map((item) => item.trim())
    )
  }, [valueInput.get()])

  React.useEffect(() => {
    if (inputRef.current) valueInput.set(inputRef.current?.value)
  }, [inputRef.current?.value])

  function handleValue() {
    onChange({
      target: { value: valueInput.get(), name },
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
                className="w-full h-full p-1 px-2 text-gray-800 bg-transparent outline-none appearance-none"
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
                    const array = [...arrayInput.get()]
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
