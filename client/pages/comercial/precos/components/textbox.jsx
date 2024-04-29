import React, { useEffect } from 'react'
import { isEmpty } from '../../../../utils/identify/is-empty.mjs'

/**
 *
 *
 * @export
 * @param {{ field:string, onChange:()=>{field:string, value:string}, value:string|number, others }}
 * @return {React.ReactNode}
 */
export function Textbox({ field, onChange, value, list, inputRef, ...others }) {
  const [valueAux, setValueAux] = React.useState('')

  useEffect(() => {
    if (isEmpty(value)) {
      setValueAux('')
    } else {
      setValueAux(value)
    }
  }, [value])

  const handleOnChange = (e) => {
    setValueAux(e.target.value)
  }

  const handleOnBlur = () => {
    if (valueAux !== value) {
      onChange({ field: field, value: valueAux })
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (valueAux !== value) {
        onChange({ field: field, value: valueAux })
      }
    }
  }

  return (
    <input
      name={field}
      value={valueAux}
      onChange={handleOnChange}
      onKeyPress={handleKeyPress}
      onBlur={handleOnBlur}
      aria-label={field}
      list={list}
      ref={inputRef}
      className="h-6 w-full border border-gray-400 px-2 py-1 text-gray-700 focus:border-gray-600"
      {...others}
    />
  )
}
