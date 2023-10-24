import { JsonRenderProps } from './data-render'
import * as DataTypeDetection from './data-type-detection'

export function JsonPrimitiveValue({
  field,
  value,
  style,
  lastElement,
}: JsonRenderProps<string | number | boolean | Date | null | undefined>) {
  let stringValue = value
  let valueStyle = style.otherValue

  if (value === null) {
    stringValue = 'null'
    valueStyle = style.nullValue
  } else if (value === undefined) {
    stringValue = 'undefined'
    valueStyle = style.undefinedValue
  } else if (DataTypeDetection.isString(value)) {
    stringValue = `"${value}"`
    valueStyle = style.stringValue
  } else if (DataTypeDetection.isBoolean(value)) {
    stringValue = value ? 'true' : 'false'
    valueStyle = style.booleanValue
  } else if (DataTypeDetection.isNumber(value)) {
    stringValue = value.toString()
    valueStyle = style.numberValue
  } else if (DataTypeDetection.isBigInt(value)) {
    stringValue = `${value.toString()}n`
    valueStyle = style.numberValue
  } else if (DataTypeDetection.isDate(value)) {
    stringValue = value.toISOString()
  } else {
    stringValue = value.toString()
  }

  if (field === '') {
    field = '""'
  }

  return (
    <div
      className={style.basicChildStyle}
      role="listitem"
    >
      {field && <span className={style.label}>{field}:</span>}
      <span className={valueStyle}>{stringValue}</span>
      {!lastElement && <span className={style.punctuation}>,</span>}
    </div>
  )
}
