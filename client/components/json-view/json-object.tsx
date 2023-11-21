import { JsonRenderProps } from './data-render.js'
import { ExpandableObject } from './expandable-object.js'

export function JsonObject({
  field,
  value,
  style,
  lastElement,
  shouldExpandNode,
  level,
}: JsonRenderProps<{ [key: string]: any }>) {
  return ExpandableObject({
    field,
    value,
    lastElement: lastElement || false,
    level,
    openBracket: '{',
    closeBracket: '}',
    style,
    shouldExpandNode,
    data: Object.keys(value).map((key) => [
      key,
      value[key as keyof typeof value],
    ]),
  })
}
