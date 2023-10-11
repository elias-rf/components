import { Table } from '@/client/components/table'
import { rpc } from '@/rpc/rpc-client'
import { TSelection } from '@/types'
import { day } from '@/utils/date/day'
import { getFieldId } from '@/utils/query/get-field-id'
import React from 'react'
import { esterilizacaoInternaDiarioSchema } from './est-int-diario_schema'

type EsterilizacaoInternaDiarioProps = {
  mesCorrente: ['mes', string][]
  diaCorrente: ['dia', string][]
  onSelection: (event: TSelection<any>) => void
  children?: React.ReactNode
}

export function EsterilizacaoInternaDiario({
  mesCorrente,
  diaCorrente,
  onSelection,
  children,
}: EsterilizacaoInternaDiarioProps) {
  const [data, setData] = React.useState<
    {
      dia: string
      dia_semana: string
      quantidade: number
    }[]
  >([])

  React.useEffect(() => {
    async function getData() {
      const data = await rpc.esterilizacaoInterna.diario({
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
      columns={esterilizacaoInternaDiarioSchema}
      selection={diaCorrente || []}
      onSelection={onSelection}
      getId={(rec: any) => [['dia', rec.dia]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
