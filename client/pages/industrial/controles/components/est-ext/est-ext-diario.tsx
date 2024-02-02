import { Table } from '@/client/components/table-full/table.js'
import { TEsterilizacaoExternaStore } from '@/client/pages/industrial/controles/components/est-ext/est-ext.store.js'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { esterilizacaoExternaDiarioSchema } from './est-ext-diario.schema.js'

type TEsterilizacaoExternaDiarioProp = {
  children?: React.ReactNode
  store: TEsterilizacaoExternaStore
}

export function EsterilizacaoExternaDiario({
  children,
  store,
}: TEsterilizacaoExternaDiarioProp) {
  const mes = store.state((state) => state.mes)
  const dia = store.state((state) => state.dia)

  const query = useQuery({
    queryKey: ['esterilizacaoExternaDiario', { mes }],
    queryFn: () => store.fetchEsterilizacaoExternaDiario(mes),
  })

  return (
    <Table
      rows={query.data || []}
      columns={esterilizacaoExternaDiarioSchema}
      selection={dia as any}
      onSelection={store.setDia}
      getId={(rec: any) => [['dia', rec.dia]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
