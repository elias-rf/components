import { pick } from '@/utils/object/pick'

export function omit(obj: { [key: string]: any }, props: Array<string>) {
  const pickProps = Object.keys(obj).filter((key) => !props.includes(key))
  return pick(obj, pickProps)
}
