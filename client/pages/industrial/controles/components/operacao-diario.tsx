import { Table } from '@/client/components/table-full/table.js'
import { controlesStore } from '@/client/pages/industrial/controles/controles_store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { operacaoDiarioSchema } from './operacao-diario_schema.js'

type OperacaoDiarioProp = {
  children?: React.ReactNode
}

export function OperacaoDiario({ children }: OperacaoDiarioProp) {
  const { mes, dia, operacao, operacaoDiario } = useSnapshot(
    controlesStore.state
  )
  const setDia = controlesStore.setDia
  const fetchOperacaoDiario = controlesStore.fetchOperacaoDiario

  React.useEffect(() => {
    fetchOperacaoDiario()
  }, [mes, operacao])

  return (
    <Table
      rows={operacaoDiario as any}
      columns={operacaoDiarioSchema}
      selection={dia as any}
      onSelection={setDia}
      getId={(rec: any) => [['dia', rec.dia]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
