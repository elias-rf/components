import { Table } from '@/client/components/table-full/table.js'
import { TOperacaoStore } from '@/client/pages/industrial/controles/components/operacao/operacao.store.js'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { operacaoTurnoSchema } from './operacao-turno.schema.js'

export function OperacaoTurno({ store }: { store: TOperacaoStore }) {
  const operacao = store.state((state) => state.operacao)
  const dia = store.state((state) => state.dia)

  const query = useQuery({
    queryKey: ['operacaoTurno', { dia, operacao }],
    queryFn: () => store.fetchOperacaoTurno(dia, operacao),
  })

  React.useEffect(() => {
    store.fetchOperacaoTurno(
      dia as ['dia', string][],
      operacao as ['operacao', string][]
    )
  }, [dia, operacao])

  return (
    <Table
      rows={query.data || []}
      columns={operacaoTurnoSchema}
    ></Table>
  )
}
