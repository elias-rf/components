import { Title } from '@/client/components/title/title.js'
import { rpc } from '@/client/lib/rpc.js'
import { format } from 'date-fns'
import React from 'react'

function quantidadeProduto(data: any[] | undefined, prod: string) {
  if (!data) return 0
  if (!data[0]) return 0
  return data[0][prod] || 0
}

export function TransferenciaMes() {
  const [data, setData] = React.useState<any[]>([])
  const mesInicial = format(new Date(), 'yyyy-MM-dd')

  React.useEffect(() => {
    async function getData() {
      const dataTransferenciaMensal = await rpc.request(
        'nfSaida_transferenciaMensal',
        {
          mes: mesInicial,
        }
      )
      setData(dataTransferenciaMensal)
    }
    getData()
  }, [mesInicial])

  return (
    <div className="grid">
      <div className="grid-cols-12">
        <Title>Produção</Title>
        <div className={'flex'}>
          <div className={'w-80 border border-gray-600 p-2'}>
            <div>LiteFlex</div>
            <div className={'text-8xl'}>
              {quantidadeProduto(data, 'LITEFLEX')}
            </div>
          </div>
          <div className={'w-60'}>
            <div
              className={
                'flex flex-nowrap justify-between border border-gray-600 p-2'
              }
            >
              <div className={'w-28'}>Hilite</div>
              <div className={'items-end text-xl'}>
                {quantidadeProduto(data, 'HILITE')}
              </div>
            </div>
            <div
              className={
                'flex flex-nowrap justify-between border border-gray-600 p-2'
              }
            >
              <div className={'w-28'}>Enlite</div>
              <div className={'text-xl'}>
                {quantidadeProduto(data, 'ENLITE')}
              </div>
            </div>
            <div
              className={
                'flex flex-nowrap justify-between border border-gray-600 p-2'
              }
            >
              <div className={'w-28'}>Metil</div>
              <div className={'text-xl'}>
                {quantidadeProduto(data, 'METILCELULOSE')}
              </div>
            </div>
            <div
              className={
                'flex flex-nowrap justify-between border border-gray-600 p-2'
              }
            >
              <div className={'w-28'}>Corneal Ring</div>
              <div className={'text-xl'}>
                {quantidadeProduto(data, 'CORNEAL RING')}
              </div>
            </div>
            <div
              className={
                'flex flex-nowrap justify-between border border-gray-600 p-2'
              }
            >
              <div className={'w-28'}>Anel Capsular</div>
              <div className={'text-xl'}>
                {quantidadeProduto(data, 'ANEL CAPSULAR')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
