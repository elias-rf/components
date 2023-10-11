import { Table } from '@/client/components/table'
import { rpc } from '@/rpc/rpc-client'
import { TSelection } from '@/types'
import { day } from '@/utils/date/day'
import { getFieldId } from '@/utils/query/get-field-id'
import React, { ReactNode } from 'react'
import { transferenciaDiarioSchema } from './transferencia-diario_schema'

type TransferenciaDiarioProps = {
  mesCorrente: ['mes', string][]
  diaCorrente: ['dia', string][]
  onSelect?: (event: TSelection<'dia'>) => void
  children?: ReactNode
}

export function TransferenciaDiario({
  mesCorrente,
  diaCorrente,
  onSelect,
  children,
}: TransferenciaDiarioProps) {
  const [data, setData] = React.useState<
    {
      dia: string
      diaSemana: string
      quantidade: number
    }[]
  >([])

  React.useEffect(() => {
    async function getData() {
      const data = await rpc.nfSaida.transferenciaDiario({
        inicio: day(getFieldId('mes', mesCorrente) + '-01')
          .startOf('month')
          .format('YYYY-MM-DD'),
        fim: day(getFieldId('mes', mesCorrente) + '-01')
          .endOf('month')
          .format('YYYY-MM-DD'),
      })
      setData(data)
    }
    getData()
  }, [mesCorrente])

  return (
    <Table
      rows={data || []}
      columns={transferenciaDiarioSchema}
      selection={diaCorrente}
      onSelection={onSelect}
      getId={(rec: any) => [['dia', rec.dia]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
