import { JsonRenderProps } from './data-render.jsx'
import { ExpandableObject } from './expandable-object.jsx'

export function JsonObject({
  field,
  value,
  style,
  lastElement,
  shouldExpandNode,
  level,
}) {
  return ExpandableObject({
    field,
    value,
    lastElement: lastElement || false,
    level,
    openBracket: '{',
    closeBracket: '}',
    style,
    shouldExpandNode,
    data: Object.keys(value).map((key) => [key, value[key]]),
  })
}
