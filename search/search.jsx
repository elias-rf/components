import { Button } from '../button/button.jsx'
import { Input } from '../input/input.jsx'
import { Label } from '../label/label.jsx'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../select/select.jsx'
import { Chip } from '../ui-old/chip/chip.jsx'
import { FormField } from '../ui-old/form-field/index.mjs'

import React, { useState } from 'react'

/**
 * Retrieves the available equality options for a given field based on the schema.
 *
 * @param {string} field - The name of the field.
 * @param {object[]} schema - The schema object containing field information.
 * @returns {object} An object mapping equality names to their corresponding display names.
 */
function getEqualitys(field, schema) {
  const equalitys = {
    '=': 'igual a',
    '<': 'menor que',
    '<=': 'menor ou igual',
    '>': 'maior que',
    '>=': 'maior ou igual',
    '?abc?': 'contêm',
    'abc?': 'começa com',
    '?abc': 'termina com',
    '-': '(vazio)',
  }

  const aux = schema.find((item) => item.name === field)

  const tipo = aux?.typeField || 'string'

  switch (tipo) {
    case 'boolean':
      return { '=': 'igual a' }
    case 'string':
      // eslint-disable-next-line no-case-declarations
      const rsp = { ...equalitys }
      delete rsp['<']
      delete rsp['<=']
      delete rsp['>']
      delete rsp['>=']
      return rsp
    default:
      return equalitys
  }
}

/**
 * Returns the label for the given field in the provided schema.
 *
 * @param {string} field - The name of the field to get the label for.
 * @param {object[]} schema - The schema object containing the field definitions.
 * @returns {string} The label for the given field, or an empty string if not found.
 */
function getFieldTitle(field, schema) {
  const aux = schema.find((col) => col.name === field)
  const rsp = aux?.label
  return rsp || ''
}

/**
 * Converts an equality operator string to a display-friendly symbol.
 *
 * @param {string} equality - The equality operator, such as '=', '!=', 'like', etc.
 * @returns {string} The display-friendly symbol for the given equality operator.
 */
function getEqualityName(equality) {
  let rsp = equality
  if (rsp === 'like') {
    rsp = '⊂'
  }
  return rsp || ''
}

/**
 * @typedef {Object} SearchProps
 * @extends {ScrollAreaPrimitive.RootProps}
 * @property {any[]} [schema]
 * @property {any[][]} [where]
 * @property {(any[][])=>void} [onWhere]
 */

/**
 * @type {React.FC<SearchProps>}
 */
export const Search = ({ schema = [], where = [], onWhere }) => {
  const [whr, setWhr] = useState([]) // where de trabalho
  const [fieldSelect, setFieldSelect] = useState(schema[0]?.name) // campo selecionado, default 1o campo.
  const [equalitySelect, setEqualitySelect] = useState('=') // igualdade selecionada, default =
  const [valueInput, setValueInput] = useState('') // valor selecionado, default ""

  React.useEffect(() => {
    setWhr(where)
  }, [where])

  function handleAdd() {
    let flag = true
    const response = [...whr]
    response.forEach((flt) => {
      if (flt[0] === fieldSelect && flt[1] === equalitySelect) {
        flt[2] = valueInput
        flag = false
      }
    })
    if (flag) response.push([fieldSelect, equalitySelect, valueInput])
    setWhr(response)
    onWhere && onWhere(response)
    setValueInput('')
  }

  function handleSelectField(value) {
    setFieldSelect(value)
    if (Object.keys(getEqualitys(value, schema)).includes(equalitySelect)) {
      return
    }
    setEqualitySelect('=')
  }

  function handleInput(event) {
    setValueInput(event.target.value)
  }

  function handleDel(idx) {
    const aux = [...whr]
    aux.splice(idx, 1)
    setWhr(aux)
    onWhere && onWhere(aux)
  }

  function handleEdit(idx) {
    const flt = [...whr[idx]]

    setFieldSelect(flt[0])
    setEqualitySelect(flt[1])
    setValueInput(flt[2])
  }

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-wrap items-center gap-2">
        {whr.map((item, idx) => (
          <div
            className=""
            key={idx}
          >
            <Chip
              onClose={() => handleDel(idx)}
              onClick={() => handleEdit(idx)}
              outline
            >{`${getFieldTitle(item[0], schema)} ${getEqualityName(item[1])} ${
              item[2]
            }`}</Chip>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-end space-x-2 sm:flex-nowrap">
        <div className="basis-full">
          <FormField>
            <Label htmlFor="field">Campo</Label>
            <Select
              value={fieldSelect}
              onValueChange={handleSelectField}
            >
              <SelectTrigger
                className="w-full"
                id="field"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {schema.map((item) => (
                  <SelectItem
                    key={item.name}
                    value={item.name}
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormField>
        </div>
        <div className="basis-full">
          <FormField>
            <Label htmlFor="equality">Igualdade</Label>
            <Select
              value={equalitySelect}
              onValueChange={(value) => setEqualitySelect(value || '')}
            >
              <SelectTrigger
                className="w-full"
                id="equality"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(getEqualitys(fieldSelect, schema)).map(
                  ([key, value]) => (
                    <SelectItem
                      key={key}
                      value={key}
                    >
                      {value}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          </FormField>
        </div>
        <div className="basis-full">
          <FormField>
            <Label htmlFor="value">Valor</Label>
            <Input
              id="value"
              value={valueInput}
              onChange={handleInput}
            />
          </FormField>
        </div>
        <div className="basis-32">
          <Button
            onClick={handleAdd}
            size="sm"
          >
            FILTRAR
          </Button>
        </div>
      </div>
    </div>
  )
}
