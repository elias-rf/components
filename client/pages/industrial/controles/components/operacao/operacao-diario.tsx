import { Table } from '@/client/components/table-full/table.js'
import { TOperacaoStore } from '@/client/pages/industrial/controles/components/operacao/operacao.store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { operacaoDiarioSchema } from './operacao-diario.schema.js'

type OperacaoDiarioProp = {
  children?: React.ReactNode
  store: TOperacaoStore
}

export function OperacaoDiario({ children, store }: OperacaoDiarioProp) {
  const { mes, dia, operacao, operacaoDiario } = useSnapshot(store.state)

  React.useEffect(() => {
    store.fetchOperacaoDiario(
      mes as ['mes', string][],
      operacao as ['operacao', string][]
    )
  }, [mes, operacao])

  return (
    <Table
      rows={operacaoDiario as any}
      columns={operacaoDiarioSchema}
      selection={dia as any}
      onSelection={store.setDia}
      getId={(rec: any) => [['dia', rec.dia]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
