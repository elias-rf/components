import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Table } from '../../../../../components_/table-full/table.jsx'
import { operacaoTurnoSchema } from './operacao-turno.schema.mjs'

export function OperacaoTurno({ store }) {
  const operacao = store.state.use.operacao()
  const dia = store.state.use.dia()

  const query = useQuery({
    queryKey: ['operacaoTurno', { dia, operacao }],
    queryFn: () => store.fetchOperacaoTurno(dia, operacao),
  })

  React.useEffect(() => {
    store.fetchOperacaoTurno(dia, operacao)
  }, [dia, operacao])

  return (
    <Table
      rows={query.data || []}
      columns={operacaoTurnoSchema}
    ></Table>
  )
}
