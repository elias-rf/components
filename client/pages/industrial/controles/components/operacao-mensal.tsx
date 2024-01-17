import { Table } from '@/client/components/table-full/table.js'
import { controlesStore } from '@/client/pages/industrial/controles/controles_store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { operacaoMensalSchema } from './operacao-mensal_schema.js'

type OperacaoMensalProps = {
  children?: React.ReactNode
}

export function OperacaoMensal({ children }: OperacaoMensalProps) {
  const { mes, operacao, operacaoMensal, mesInicio } = useSnapshot(
    controlesStore.state
  )
  const setMes = controlesStore.setMes
  const fetchOperacaoMensal = controlesStore.fetchOperacaoMensal

  React.useEffect(() => {
    fetchOperacaoMensal()
  }, [mesInicio, operacao])

  return (
    <>
      <Table
        rows={operacaoMensal as any}
        columns={operacaoMensalSchema}
        selection={mes as any}
        onSelection={setMes}
        getId={(rec: any) => [['mes', rec.mes]]}
      >
        {() => <>{children}</>}
      </Table>
    </>
  )
}
