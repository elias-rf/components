import { Table } from '@/client/components/table-full/table.js'
import { TEsterilizacaoInternaStore } from '@/client/pages/industrial/controles/components/est-int/est-int-store.js'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { esterilizacaoInternaMensalSchema } from './est-int-mensal.schema.js'

type EsterilizacaoInternaMensalProp = {
  children?: React.ReactNode
  store: TEsterilizacaoInternaStore
}

export function EsterilizacaoInternaMensal({
  children,
  store,
}: EsterilizacaoInternaMensalProp) {
  const mes = store.state((state) => state.mes)
  const mesInicio = store.state((state) => state.mesInicio)

  const query = useQuery({
    queryKey: ['esterilizacaoInternaMensal', { mesInicio }],
    queryFn: () => store.fetchEsterilizacaoInternaMensal(mesInicio),
  })

  return (
    <Table
      rows={query.data || []}
      columns={esterilizacaoInternaMensalSchema}
      selection={mes as any}
      onSelection={store.setMes}
      getId={(rec: any) => [['mes', rec.mes]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
