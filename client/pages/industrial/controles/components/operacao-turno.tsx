import { Table } from '@/client/components/table-full/table.js'
import { controlesStore } from '@/client/pages/industrial/controles/controles_store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { operacaoTurnoSchema } from './operacao-turno_schema.js'

export function OperacaoTurno() {
  const { operacao, dia, operacaoTurno } = useSnapshot(controlesStore.state)
  const fetchOperacaoTurno = controlesStore.fetchOperacaoTurno

  React.useEffect(() => {
    fetchOperacaoTurno()
  }, [dia, operacao])

  return (
    <Table
      rows={operacaoTurno as any}
      columns={operacaoTurnoSchema}
    ></Table>
  )
}
