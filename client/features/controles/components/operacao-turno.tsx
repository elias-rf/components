import { Table } from '@/client/components/table'
import { useControles } from '@/client/features/controles/controles_store'
import React from 'react'
import { operacaoTurnoSchema } from './operacao-turno_schema'

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
