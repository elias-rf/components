import { isoDate, string } from 'valibot'

export const isMDY = (message = 'Valor deve ser ano-mes-dia') => {
  return string(message, [isoDate(message)])
}
