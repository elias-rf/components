import * as v from 'valibot'

export const isMDY = (message = 'Valor deve ser ano-mes-dia') => {
  return v.string(message, [v.isoDate(message)])
}
