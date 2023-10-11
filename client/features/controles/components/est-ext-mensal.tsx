import { Table } from '@/client/components/table'
import { rpc } from '@/rpc/rpc-client'
import { TSelection } from '@/types'
import { getFieldId } from '@/utils/query/get-field-id'
import React from 'react'
import { esterilizacaoExternaMensalSchema } from './est-ext-mensal_schema'

type EsterilizacaoExternaMensalProp = {
  children?: React.ReactNode
  mesCorrente: ['mes', string][]
  mesInicial: ['mes', string][]
  onSelection?: (event: TSelection<any>) => void
}

export function EsterilizacaoExternaMensal({
  mesInicial,
  mesCorrente,
  onSelection,
  children,
}: EsterilizacaoExternaMensalProp) {
  const [data, setData] = React.useState<
    {
      mes: string
      quantidade: number
    }[]
  >([])

  React.useEffect(() => {
    async function getData() {
      const data = await rpc.esterilizacaoExterna.mensal({
        mes: getFieldId('mes', mesInicial),
      })
      setData(data)
    }
    getData()
  }, [mesInicial])

  return (
    <Table
      rows={data || []}
      columns={esterilizacaoExternaMensalSchema}
      selection={mesCorrente || []}
      onSelection={onSelection}
      getId={(rec: any) => [['mes', rec.mes]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
