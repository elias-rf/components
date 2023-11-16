import { BaseSchema, safeParse } from 'valibot'

export const valid = (schema: BaseSchema<any, any>) => (value: any) => {
  const resp = safeParse(schema, value)
  if (resp.success) {
    return ''
  }
  return resp.issues[0].message
}
