import { Table } from '@/client/components/table'
import { useControles } from '@/client/features/controles/controles_store'
import React from 'react'
import { operacaoTurnoSchema } from './operacao-turno_schema'

export function OperacaoTurno() {
  const operacao = useControles.use.operacao()
  const dia = useControles.use.dia()
  const fetchOperacaoProduto = useControles.use.fetchOperacaoProduto()
  const operacaoProduto = useControles.use.operacaoProduto()

  React.useEffect(() => {
    fetchOperacaoProduto()
  }, [dia, operacao])

  return (
    <Table
      rows={operacaoProduto}
      columns={operacaoTurnoSchema}
    ></Table>
  )
}
