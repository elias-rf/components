import { Table } from '@/client/components/table'
import { rpc } from '@/rpc/rpc-client'
import { TSelection } from '@/types'
import { day } from '@/utils/date/day'
import { getFieldId } from '@/utils/query/get-field-id'
import React from 'react'
import { esterilizacaoExternaDiarioSchema } from './est-ext-diario_schema'

type TEsterilizacaoExternaDiarioProp = {
  mesCorrente: ['mes', string][]
  diaCorrente: ['dia', string][]
  onSelection: (event: TSelection<any>) => void
  children?: React.ReactNode
}

export function EsterilizacaoExternaDiario({
  mesCorrente,
  diaCorrente,
  onSelection,
  children,
}: TEsterilizacaoExternaDiarioProp) {
  const [data, setData] = React.useState<
    {
      dia: string
      dia_semana: string
      quantidade: number
    }[]
  >([])

  React.useEffect(() => {
    async function getData() {
      const data = await rpc.esterilizacaoExterna.diario({
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
      columns={esterilizacaoExternaDiarioSchema}
      selection={diaCorrente || []}
      onSelection={onSelection}
      getId={(rec: any) => [['dia', rec.dia]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
