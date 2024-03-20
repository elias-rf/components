import { hashObject } from '@/utils/hash-object.js'
import { ms } from '@/utils/string/ms.js'
import memoizee from 'memoizee'

export function memoize<T extends (...args: any[]) => any>(fn: T): T {
  return memoizee(fn, {
    promise: true,
    maxAge: ms('5s'),
    // max: 10000,
    normalizer: (args: any) => hashObject(args),
  }) as any
}
