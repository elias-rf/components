import { JsonRenderProps } from './data-render.js'
import { ExpandableObject } from './expandable-object.js'

export function JsonArray({
  field,
  value,
  style,
  lastElement,
  level,
  shouldExpandNode,
}: JsonRenderProps<Array<any>>) {
  return ExpandableObject({
    field,
    value,
    lastElement: lastElement || false,
    level,
    openBracket: '[',
    closeBracket: ']',
    style,
    shouldExpandNode,
    data: value.map((element) => [undefined, element]),
  })
}
