import * as v from 'valibot'

export const valid = (schema) => (value) => {
  const resp = v.safeParse(schema, value)
  if (resp.success) {
    return ''
  }
  return resp.issues[0].message
}
