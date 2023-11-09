import { Button } from '@/client/components/ui/button'
import { Chip } from '@/client/components/ui/chip'
import { Input } from '@/client/components/ui/input/input'
import { Select } from '@/client/components/ui/select'
import { TWhere } from '@/types'
import React, { useState } from 'react'

type TSearchProps = {
  schema: { name: string; typeField?: string; label: string }[]
  where: TWhere<any>
  onWhere: (event: TWhere<any>) => void
}

// retorna uma lista de igualdades de acordo como o tipo do campoß
function getEqualitys(
  field: string,
  schema: { name: string; typeField?: string }[]
) {
  const equalitys: { [key: string]: string } = {
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

  const aux = schema.find((item: { name: string }) => item.name === field)

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

// retorna o nome do campo
function getFieldTitle(
  field: string,
  schema: { name: string; label: string }[]
) {
  const aux = schema.find((col: { name: string }) => col.name === field)
  const rsp = aux?.label
  return rsp || ''
}

// retorna o nome da igualdade
function getEqualityName(equality: string) {
  let rsp = equality
  if (rsp === 'like') {
    rsp = '⊂'
  }
  return rsp || ''
}

export function Search({ schema = [], where = [], onWhere }: TSearchProps) {
  const [whr, setWhr] = useState<TWhere<any>>([]) // where de trabalho
  const [fieldSelect, setFieldSelect] = useState(schema[0]?.name) // campo selecionado, default 1o campo.
  const [equalitySelect, setEqualitySelect] = useState<string>('=') // igualdade selecionada, default =
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
    onWhere(response)
    setValueInput('')
  }

  function handleSelectField(value: string) {
    setFieldSelect(value)
    if (Object.keys(getEqualitys(value, schema)).includes(equalitySelect)) {
      return
    }
    setEqualitySelect('=')
  }

  function handleInput(value: string) {
    setValueInput(value)
  }

  function handleDel(idx: number) {
    const aux = [...whr]
    aux.splice(idx, 1)
    setWhr(aux)
    onWhere(aux)
  }

  function handleEdit(idx: number) {
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
          <Select
            label="Campo"
            value={fieldSelect}
            onChange={handleSelectField}
            options={schema.map(
              ({ label, name }: { label: string; name: string }) => [
                label,
                name,
              ]
            )}
          />
        </div>
        <div className="basis-full">
          <Select
            label="Igualdade"
            value={equalitySelect}
            onChange={(value: string) => setEqualitySelect(value || '')}
            options={Object.entries(getEqualitys(fieldSelect, schema)).map(
              ([key, value]: [string, string]) => [value, key]
            )}
          />
        </div>
        <div className="basis-full">
          <Input
            label="Valor"
            value={valueInput}
            onInput={handleInput}
          />
        </div>
        <div className="basis-32">
          <Button
            onClick={handleAdd}
            outline
            size="sm"
          >
            FILTRAR
          </Button>
        </div>
      </div>
    </div>
  )
}
