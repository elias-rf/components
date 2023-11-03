import { MultiKeyCache } from '@/utils/multi-key-cache'
import { omit } from '@/utils/object/omit'
import { ms } from '@/utils/string/ms'

const fetchMethod = (
  key: string,
  _staleValue: any,
  { context }: { context: { method: (args: any) => Promise<any> } }
) => {
  const args = omit(JSON.parse(key), ['_tables', '_table', '_name', '_method'])
  return context.method(args) as Promise<ReturnType<typeof context.method>>
}

export const cache = MultiKeyCache({
  max: 100,
  ttl: ms(`30s`),
  fetchMethod,
  // logger(args: any) {
  //   console.log(args)
  // },
})
