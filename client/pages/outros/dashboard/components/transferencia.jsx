import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { Title } from '../../../../components/title/title.jsx'
import { rpc } from '../../../../lib/rpc.mjs'

export function TransferenciaMes({ inicial, final }) {
  const query = useQuery({
    queryKey: ['nfSaida', { inicial, final }],
    queryFn: () => {
      return rpc.request('nfSaida_transferenciaDiario', {
        inicio: format(inicial, 'yyyy-MM-dd'),
        fim: format(final, 'yyyy-MM-dd'),
      })
    },
    select: (data) => {
      const resp = {
        LITEFLEX: 0,
        ENLITE: 0,
        METILCELULOSE: 0,
        'ANEL CAPSULAR': 0,
        'CORNEAL RING': 0,
      }
      if (!data) return resp
      return data.reduce((prev, cur) => {
        prev.LITEFLEX = prev.LITEFLEX + (cur.LITEFLEX || 0)
        prev.ENLITE = prev.ENLITE + (cur.ENLITE || 0)
        prev.METILCELULOSE = prev.METILCELULOSE + (cur.METILCELULOSE || 0)
        prev['ANEL CAPSULAR'] =
          prev['ANEL CAPSULAR'] + (cur['ANEL CAPSULAR'] || 0)
        prev['CORNEAL RING'] = prev['CORNEAL RING'] + (cur['CORNEAL RING'] || 0)
        return prev
      }, resp)
    },
  })

  return (
    <div
      className={
        'flex h-72 w-80 flex-col content-between space-y-4 border border-gray-600 bg-slate-50 p-2'
      }
    >
      <Title>Produção</Title>
      <div className={'flex w-full flex-col space-y-4'}>
        <div className={'flex  flex-nowrap justify-between'}>
          <div className={'w-28'}>LiteFlex</div>
          <div className={'text-2xl'}>{query.data?.LITEFLEX}</div>
        </div>
        <div className={'flex  flex-nowrap justify-between'}>
          <div className={'w-28'}>Enlite</div>
          <div className={'text-xl'}>{query.data?.ENLITE}</div>
        </div>
        <div className={'flex  flex-nowrap justify-between'}>
          <div className={'w-28'}>Metil</div>
          <div className={'text-xl'}>{query.data?.METILCELULOSE}</div>
        </div>
        <div className={'flex  flex-nowrap justify-between'}>
          <div className={'w-28'}>Corneal Ring</div>
          <div className={'text-xl'}>{query.data?.['CORNEAL RING']}</div>
        </div>
        <div className={'flex  flex-nowrap justify-between'}>
          <div className={'w-28'}>Anel Capsular</div>
          <div className={'text-xl'}>{query.data?.['ANEL CAPSULAR']}</div>
        </div>
      </div>
    </div>
  )
}
