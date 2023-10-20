import { ReactNode } from 'react'

export function getAccessKey(label: ReactNode) {
  const response: {
    initial: string
    middle: string
    final: string
    accessKey?: string
  } = { initial: '', final: '', accessKey: '', middle: '' }
  if (typeof label !== 'string') return response
  const [initial, text = ''] = label.split('[')
  const [accessKey, final = ''] = text.split(']')
  response.initial = initial
  response.middle = accessKey
  response.final = final
  response.accessKey =
    accessKey.length > 0 ? accessKey.toLowerCase() : undefined
  return response
}
