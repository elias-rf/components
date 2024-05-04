import React from 'react'
import { ChevronIcon } from '../icons/chevron-icon.jsx'
import { CloseIcon } from '../icons/close-icon.jsx'

const Pill = ({ children, onClick }) => {
  return (
    <div className="flex items-center justify-center px-2 m-1 text-blue-700 bg-blue-100 border border-blue-300 rounded-full ">
      <div className="flex-initial max-w-full text-xs ">{children}</div>
      <div onClick={onClick} className="flex">
        <CloseIcon className="w-4 h-4 ml-2 cursor-pointer hover:text-blue-400" />
      </div>
    </div>
  )
}

const Item = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-full border-b border-gray-100 rounded-t cursor-pointer hover:bg-blue-100"
    >
      <div className="relative flex items-center w-full p-2 pl-2 border-l-2 border-transparent hover:border-blue-100">
        <div className="flex items-center w-full">
          <div className="mx-2 leading-6 ">{children}</div>
        </div>
      </div>
    </div>
  )
}

const List = ({ children }) => {
  return (
    <div className="absolute left-0 z-40 w-full overflow-y-auto bg-white rounded shadow max-h-select mt-14">
      <div className="flex flex-col w-full">{children}</div>
    </div>
  )
}

const InputPills = ({ children, showList, setShowList }) => {
  return (
    <div className="w-full">
      <div className="flex my-1 bg-white border border-gray-200 rounded ">
        <div className="flex flex-wrap flex-auto">{children}</div>
        <div className="flex items-center w-8 py-1 pl-2 pr-1 text-gray-300 border-l border-gray-200">
          <button
            onClick={() => {
              setShowList(!showList)
            }}
            className="w-6 h-6 text-gray-600 outline-none cursor-pointer focus:outline-none"
          >
            <ChevronIcon
              variant={showList ? 'up' : 'down'}
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export const SelectBadge = React.forwardRef(
  ({ name, onChange, options }, ref) => {
    const inputRef = React.useRef(null)
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
        <input className="hidden" name={name} ref={inputRef} />
        <div className="relative flex flex-col ">
          <InputPills showList={showList} setShowList={setShowList}>
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
                  className="w-full h-full p-1 px-2 text-gray-800 bg-transparent outline-none appearance-none"
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
