import * as DataTypeDetection from './data-type-detection'
import { JsonArray } from './json-array'
import { JsonObject } from './json-object'
import { JsonPrimitiveValue } from './json-primitive-value'

export interface StyleProps {
  container: string
  basicChildStyle: string
  label: string
  nullValue: string
  undefinedValue: string
  numberValue: string
  stringValue: string
  booleanValue: string
  otherValue: string
  punctuation: string
  expandIcon: string
  collapseIcon: string
  collapsedContent: string
}

export interface JsonRenderProps<T> {
  field?: string
  value: T
  lastElement: boolean
  level: number
  style: StyleProps
  shouldExpandNode: (level: number, value: any, field?: string) => boolean
}

export interface ExpandableRenderProps {
  field?: string
  value: Array<any> | object
  data: Array<[string | undefined, any]>
  openBracket: string
  closeBracket: string
  lastElement: boolean
  level: number
  style: StyleProps
  shouldExpandNode: (level: number, value: any, field?: string) => boolean
}

export default function DataRender(props: JsonRenderProps<any>) {
  const value = props.value
  if (DataTypeDetection.isArray(value)) {
    return <JsonArray {...props} />
  }

  if (DataTypeDetection.isObject(value) && !DataTypeDetection.isDate(value)) {
    return <JsonObject {...props} />
  }

  return <JsonPrimitiveValue {...props} />
}
