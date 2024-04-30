import { ExpandableObject } from './expandable-object.jsx'

export function JsonArray({
  field,
  value,
  style,
  lastElement,
  level,
  shouldExpandNode,
}) {
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
