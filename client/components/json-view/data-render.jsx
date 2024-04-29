import * as DataTypeDetection from './data-type-detection.mjs'
import { JsonArray } from './json-array.mjs'
import { JsonObject } from './json-object.mjs'
import { JsonPrimitiveValue } from './json-primitive-value.jsx'

export default function DataRender(props) {
  const value = props.value
  if (DataTypeDetection.isArray(value)) {
    return <JsonArray {...props} />
  }

  if (DataTypeDetection.isObject(value) && !DataTypeDetection.isDate(value)) {
    return <JsonObject {...props} />
  }

  return <JsonPrimitiveValue {...props} />
}
