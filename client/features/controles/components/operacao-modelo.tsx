import { Table } from '@/client/components/table'
import { useControles } from '@/client/features/controles/controles_store'
import React from 'react'
import { operacaoModeloSchema } from './operacao-modelo_schema'

export function OperacaoModelo() {
  const operacao = useControles.use.operacao()
  const dia = useControles.use.dia()
  const produto = useControles.use.produto()
  const fetchOperacaoModelo = useControles.use.fetchOperacaoModelo()
  const operacaoModelo = useControles.use.operacaoModelo()

  React.useEffect(() => {
    fetchOperacaoModelo()
  }, [dia, produto, operacao])

  return (
    <Table
      rows={operacaoModelo}
      columns={operacaoModeloSchema}
    ></Table>
  )
}
