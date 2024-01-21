import { Table } from '@/client/components/table-full/table.js'
import { TOperacaoStore } from '@/client/pages/industrial/controles/components/operacao/operacao.store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { operacaoModeloSchema } from './operacao-modelo.schema.js'

export function OperacaoModelo({ store }: { store: TOperacaoStore }) {
  const { operacao, dia, produto, operacaoModelo } = useSnapshot(store.state)

  React.useEffect(() => {
    store.fetchOperacaoModelo(
      dia as ['dia', string][],
      produto as ['produto', string][],
      operacao as ['operacao', string][]
    )
  }, [dia, produto, operacao])

  return (
    <Table
      rows={operacaoModelo as any}
      columns={operacaoModeloSchema}
    ></Table>
  )
}
