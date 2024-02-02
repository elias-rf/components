import { Table } from '@/client/components/table-full/table.js'
import { TEsterilizacaoInternaStore } from '@/client/pages/industrial/controles/components/est-int/est-int-store.js'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { esterilizacaoInternaDiarioSchema } from './est-int-diario.schema.js'

type EsterilizacaoInternaDiarioProps = {
  children?: React.ReactNode
  store: TEsterilizacaoInternaStore
}

export function EsterilizacaoInternaDiario({
  children,
  store,
}: EsterilizacaoInternaDiarioProps) {
  const mes = store.state((state) => state.mes)
  const dia = store.state((state) => state.dia)

  const query = useQuery({
    queryKey: ['esterilizacaoInternaDiario', { mes }],
    queryFn: () => store.fetchEsterilizacaoInternaDiario(mes),
  })

  return (
    <Table
      rows={query.data || []}
      columns={esterilizacaoInternaDiarioSchema}
      selection={dia}
      onSelection={store.setDia}
      getId={(rec: any) => [['dia', rec.dia]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
