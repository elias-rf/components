import { Table } from '@/client/components/table-full/table.js'
import { controlesStore } from '@/client/pages/industrial/controles/controles_store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { operacaoModeloSchema } from './operacao-modelo_schema.js'

export function OperacaoModelo() {
  const { operacao, dia, produto, operacaoModelo } = useSnapshot(
    controlesStore.state
  )
  const fetchOperacaoModelo = controlesStore.fetchOperacaoModelo

  React.useEffect(() => {
    fetchOperacaoModelo()
  }, [dia, produto, operacao])

  return (
    <Table
      rows={operacaoModelo as any}
      columns={operacaoModeloSchema}
    ></Table>
  )
}
