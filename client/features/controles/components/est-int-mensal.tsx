import { Table } from '@/client/components/table'
import { rpc } from '@/rpc/rpc-client'
import { TSelection } from '@/types'
import { getFieldId } from '@/utils/query/get-field-id'
import React from 'react'
import { esterilizacaoInternaMensalSchema } from './est-int-mensal_schema'

type EsterilizacaoInternaMensalProp = {
  children?: React.ReactNode
  mesCorrente: ['mes', string][]
  mesInicial: ['mes', string][]
  onSelection?: (event: TSelection<any>) => void
}

export function EsterilizacaoInternaMensal({
  mesInicial,
  mesCorrente,
  onSelection,
  children,
}: EsterilizacaoInternaMensalProp) {
  const [data, setData] = React.useState<
    {
      mes: string
      quantidade: number
    }[]
  >([])

  React.useEffect(() => {
    async function getData() {
      const data = await rpc.esterilizacaoInterna.mensal({
        mes: getFieldId('mes', mesInicial),
      })
      setData(data)
    }
    getData()
  }, [mesInicial])

  return (
    <Table
      rows={data || []}
      columns={esterilizacaoInternaMensalSchema}
      selection={mesCorrente}
      onSelection={onSelection}
      getId={(rec: any) => [['mes', rec.mes]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
