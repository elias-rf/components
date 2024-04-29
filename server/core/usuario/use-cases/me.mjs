import { format, fromUnixTime } from 'date-fns'
import { flow } from 'lodash-es'

export const me = (dataSource) => async (_, ctx) => {
  const resp = { ...ctx?.user }
  if (resp && resp.iat) {
    resp.iat = flow([fromUnixTime, ($) => format($, 'yyyy-MM-ddTHH:mm:ss')])(
      resp.iat
    )
    resp.exp = flow([fromUnixTime, ($) => format($, 'yyyy-MM-ddTHH:mm:ss')])(
      resp.exp
    )
  }
  return resp || 'NOT_LOGGED'
}
