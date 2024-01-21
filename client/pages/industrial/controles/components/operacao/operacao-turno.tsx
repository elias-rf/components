import { Table } from '@/client/components/table-full/table.js'
import { TOperacaoStore } from '@/client/pages/industrial/controles/components/operacao/operacao.store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { operacaoTurnoSchema } from './operacao-turno.schema.js'

export function OperacaoTurno({ store }: { store: TOperacaoStore }) {
  const { operacao, dia, operacaoTurno } = useSnapshot(store.state)

  React.useEffect(() => {
    store.fetchOperacaoTurno(
      dia as ['dia', string][],
      operacao as ['operacao', string][]
    )
  }, [dia, operacao])

  return (
    <Table
      rows={operacaoTurno as any}
      columns={operacaoTurnoSchema}
    ></Table>
  )
}
