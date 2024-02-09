import { isValid, parse } from 'date-fns'

const formats = ['yy-MM-dd', 'yyyy-MM-dd', 'dd/MM/yy', 'dd/MM/yyyy']

export function getDateFormat(date: string): string | null {
  for (const format of formats) {
    const parsed = parse(date, format, new Date())
    if (isValid(parsed)) {
      return format
    }
  }
  return null
}
