import { Title } from '@/client/components/title/title.jsx'
import { rpc } from '@/client/lib/rpc.mjs'
import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'

export function Faturamento({ inicial, final }) {
  return (
    <div
      className={
        'flex h-72 w-80 flex-col content-between border border-gray-600 bg-slate-50 p-2'
      }
    >
      <Title>Faturamento</Title>
      <div className={'flex'}>
        <div className={'w-80 border border-gray-300 p-2'}>
          <div>Liteflex: 'R$ 20.000,00'</div>
        </div>
        <div className={'w-80 border border-gray-300 p-2'}>
          <div>Enlite: 'R$ 20.000,00'</div>
        </div>
      </div>
    </div>
  )
}
