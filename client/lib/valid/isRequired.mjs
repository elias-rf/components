import * as v from 'valibot'

export const isRequired = (message = 'Valor deve ser informado') => {
  return v.string(message, [v.minLength(1, message)])
}
