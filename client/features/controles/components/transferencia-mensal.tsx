import { Table } from '@/client/components/table'
import { rpc } from '@/rpc/rpc-client'
import { TId, TSelection } from '@/types'
import { day } from '@/utils/date/day'
import { getFieldId } from '@/utils/query/get-field-id'
import React from 'react'
import { transferenciaMensalSchema } from './transferencia-mensal_schema'

type TransferenciaMensalProps = {
  mesCorrente: TSelection<'mes'>
  children?: React.ReactNode
  dia?: string
  onSelectEvent?: (event: TSelection<'mes'>) => void
}

export function TransferenciaMensal({
  children,
  mesCorrente,
  dia,
  onSelectEvent,
}: TransferenciaMensalProps) {
  const [data, setData] = React.useState<
    {
      mes: string
      quantidade: number
    }[]
  >([])

  React.useEffect(() => {
    async function getData() {
      const mesInicial: TId<'mes'> = [
        ['mes', day(dia).subtract(13, 'month').format('YYYY-MM')],
      ]
      const data = await rpc.nfSaida.transferenciaMensal({
        mes: getFieldId('mes', mesInicial),
      })
      setData(data)
    }
    getData()
  }, [dia])

  return (
    <Table
      rows={data || []}
      columns={transferenciaMensalSchema}
      selection={mesCorrente}
      onSelection={onSelectEvent}
      getId={(rec: any) => [['mes', rec.mes]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
