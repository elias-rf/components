import { Table } from '@/client/components/table-full/table.js'
import { TOperacaoStore } from '@/client/pages/industrial/controles/components/operacao/operacao.store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { operacaoMensalSchema } from './operacao-mensal.schema.js'

type OperacaoMensalProps = {
  children?: React.ReactNode
  store: TOperacaoStore
}

export function OperacaoMensal({ children, store }: OperacaoMensalProps) {
  const { mes, operacao, operacaoMensal, mesInicio } = useSnapshot(store.state)

  React.useEffect(() => {
    store.fetchOperacaoMensal(
      mesInicio as ['mes', string][],
      operacao as ['operacao', string][]
    )
  }, [mesInicio, operacao])

  return (
    <>
      <Table
        rows={operacaoMensal as any}
        columns={operacaoMensalSchema}
        selection={mes as any}
        onSelection={store.setMes}
        getId={(rec: any) => [['mes', rec.mes]]}
      >
        {() => <>{children}</>}
      </Table>
    </>
  )
}
