import { minLength, string } from 'valibot'

export const isRequired = (message = 'Valor deve ser informado') => {
  return string(message, [minLength(1, message)])
}
