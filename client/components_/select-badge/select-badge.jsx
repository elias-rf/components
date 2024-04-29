import React from 'react'
import { ChevronIcon } from '../icons/chevron-icon.jsx'
import { CloseIcon } from '../icons/close-icon.jsx'

const Pill = ({ children, onClick }) => {
  return (
    <div className="m-1 flex items-center justify-center rounded-full border border-blue-300 bg-blue-100 px-2 text-blue-700 ">
      <div className="max-w-full flex-initial text-xs ">{children}</div>
      <div
        onClick={onClick}
        className="flex"
      >
        <CloseIcon className="ml-2 h-4 w-4 cursor-pointer hover:text-blue-400" />
      </div>
    </div>
  )
}

const Item = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-full cursor-pointer rounded-t border-b border-gray-100 hover:bg-blue-100"
    >
      <div className="relative flex w-full items-center border-l-2 border-transparent p-2 pl-2 hover:border-blue-100">
        <div className="flex w-full items-center">
          <div className="mx-2 leading-6 ">{children}</div>
        </div>
      </div>
    </div>
  )
}

const List = ({ children }) => {
  return (
    <div className="max-h-select absolute left-0 z-40 mt-14 w-full overflow-y-auto rounded bg-white shadow">
      <div className="flex w-full flex-col">{children}</div>
    </div>
  )
}

const InputPills = ({ children, showList, setShowList }) => {
  return (
    <div className="w-full">
      <div className="my-1 flex rounded border border-gray-200 bg-white ">
        <div className="flex flex-auto flex-wrap">{children}</div>
        <div className="flex w-8 items-center border-l border-gray-200 py-1 pl-2 pr-1 text-gray-300">
          <button
            onClick={() => {
              setShowList(!showList)
            }}
            className="h-6 w-6 cursor-pointer text-gray-600 outline-none focus:outline-none"
          >
            <ChevronIcon
              variant={showList ? 'up' : 'down'}
              className="h-5 w-5"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export const SelectBadge = React.forwardRef(
  ({ name, onChange, options }, ref) => {
    const inputRef = React.useRef < HTMLInputElement > null
    const [showList, setShowList] = React.useState(false)
    const [valueFilter, setValueFilter] = React.useState('')
    const [valueInput, setValueInput] = React.useState('')
    const [arrayInput, setArrayInput] = React.useState([])

    React.useImperativeHandle(ref, () => inputRef.current || {}, [])

    React.useEffect(() => {
      if (valueInput === '') {
        setArrayInput([])
      } else {
        setArrayInput(valueInput.split(',').map((item) => item.trim()))
      }
      onChange({
        target: { value: valueInput, name },
      })
    }, [valueInput])

    React.useEffect(() => {
      if (inputRef.current) setValueInput(inputRef.current?.value)
    }, [inputRef.current?.value])

    return (
      <div className="w-full ">
        <div> showList: {showList.toString()}</div>
        <div>valueFilter: {valueFilter.toString()}</div>
        <div>valueInput: {valueInput.toString()}</div>
        <div>arrayInput: {arrayInput.toString()}</div>
        <input
          className="hidden"
          name={name}
          ref={inputRef}
        />
        <div className="relative flex flex-col ">
          <InputPills
            showList={showList}
            setShowList={setShowList}
          >
            <>
              {arrayInput.map((item) => {
                const [label, value] =
                  options.find(([_, value]) => value === item) || []
                return (
                  <Pill
                    key={value}
                    onClick={() => {
                      const array = arrayInput.filter((item) => item !== value)
                      setValueInput(array.join(','))
                      setShowList(false)
                    }}
                  >
                    {label}
                  </Pill>
                )
              })}
              <div className="flex-1">
                <input
                  value={valueFilter}
                  onChange={(e) => {
                    setShowList(true)
                    setValueFilter(e.target.value)
                  }}
                  className="h-full w-full appearance-none bg-transparent p-1 px-2 text-gray-800 outline-none"
                />
              </div>
            </>
          </InputPills>
          {showList ? (
            <List>
              {options
                .filter(([label, value]) => {
                  return (
                    !arrayInput.includes(value) &&
                    label.toLowerCase().includes(valueFilter.toLowerCase())
                  )
                })
                .map(([label, value]) => (
                  <Item
                    key={value}
                    onClick={() => {
                      const array = [...arrayInput]
                      if (!array.includes(value)) {
                        array.push(value)
                        setValueInput(array.join(','))
                      }
                      setShowList(false)
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
  }
)
