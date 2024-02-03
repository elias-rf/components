import { Table } from '@/client/components/table-full/table.js'
import { TEsterilizacaoExternaStore } from '@/client/pages/industrial/controles/components/est-ext/est-ext.store.js'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { esterilizacaoExternaMensalSchema } from './est-ext-mensal.schema.js'

type EsterilizacaoExternaMensalProp = {
  children?: React.ReactNode
  store: TEsterilizacaoExternaStore
}

export function EsterilizacaoExternaMensal({
  children,
  store,
}: EsterilizacaoExternaMensalProp) {
  const mesInicio = store.state.use.mesInicio()
  const mes = store.state.use.mes()

  const query = useQuery({
    queryKey: ['esterilizacaoExternaMensal', { mesInicio }],
    queryFn: () => store.fetchEsterilizacaoExternaMensal(mesInicio),
  })

  return (
    <Table
      rows={query.data || []}
      columns={esterilizacaoExternaMensalSchema}
      selection={mes as any}
      onSelection={store.setMes}
      getId={(rec: any) => [['mes', rec.mes]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
