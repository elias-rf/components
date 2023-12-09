import { MultiKeyCache } from '@/utils/multi-key-cache.js'
import { omit } from '@/utils/object/omit.js'
import { ms } from '@/utils/string/ms.js'

const fetchMethod = (
  key: string,
  _staleValue: any,
  { context }: { context: { method: (args: any) => Promise<any> } }
) => {
  const args = omit(JSON.parse(key), ['_tables', '_table'])
  return context.method(args) as Promise<ReturnType<typeof context.method>>
}

export const cache = MultiKeyCache({
  max: 100,
  ttl: ms(`30s`),
})
