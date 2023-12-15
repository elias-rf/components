import { Table } from '@/client/components/table/table.js'
import { useControles } from '@/client/pages/industrial/controles/controles_store.js'
import React from 'react'
import { operacaoTurnoSchema } from './operacao-turno_schema.js'

export function OperacaoTurno() {
  const operacao = useControles.use.operacao()
  const dia = useControles.use.dia()
  const fetchOperacaoTurno = useControles.use.fetchOperacaoTurno()
  const operacaoTurno = useControles.use.operacaoTurno()

  React.useEffect(() => {
    fetchOperacaoTurno()
  }, [dia, operacao])

  return (
    <Table
      rows={operacaoTurno}
      columns={operacaoTurnoSchema}
    ></Table>
  )
}
