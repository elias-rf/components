import { MultiKeyCache } from '@/utils/multi-key-cache'
import { omit } from '@/utils/object/omit'

const fetchMethod = (
  key: string,
  _staleValue: any,
  { context }: { context: { method: (args: any) => Promise<any> } }
) => {
  const args = omit(JSON.parse(key), ['tables'])
  return context.method(args) as Promise<ReturnType<typeof context.method>>
}

export const cache = MultiKeyCache({
  max: 100,
  ttl: 30000,
  fetchMethod,
  logger(args: any) {
    console.log(args)
  },
})
