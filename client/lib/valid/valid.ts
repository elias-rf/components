import * as v from 'valibot'

export const valid = (schema: v.BaseSchema<any, any>) => (value: any) => {
  const resp = v.safeParse(schema, value)
  if (resp.success) {
    return ''
  }
  return resp.issues[0].message
}
