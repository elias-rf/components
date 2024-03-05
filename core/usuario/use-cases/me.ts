import { TDataSource } from '@/data/index.js'
import { TRpcContext } from '@/server/routes/rpc2.js'
import type { TCurrentUser } from '@/types/index.js'
import { format, fromUnixTime } from 'date-fns'
import { flow } from 'lodash-es'

export const me =
  (dataSource: TDataSource['oftalmo']['usuario']) =>
  async (_: void, ctx?: TRpcContext) => {
    const resp: any = { ...ctx?.user }
    if (resp && resp.iat) {
      resp.iat = flow([fromUnixTime, ($) => format($, 'yyyy-MM-ddTHH:mm:ss')])(
        resp.iat
      )
      resp.exp = flow([fromUnixTime, ($) => format($, 'yyyy-MM-ddTHH:mm:ss')])(
        resp.exp
      )
    }
    return (resp as TCurrentUser) || 'NOT_LOGGED'
  }
