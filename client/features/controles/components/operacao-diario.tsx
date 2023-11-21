import { Table } from '@/client/components/table/table.js'
import { useControles } from '@/client/features/controles/controles_store.js'
import React from 'react'
import { operacaoDiarioSchema } from './operacao-diario_schema.js'

type OperacaoDiarioProp = {
  children?: React.ReactNode
}

export function OperacaoDiario({ children }: OperacaoDiarioProp) {
  const mes = useControles.use.mes()
  const dia = useControles.use.dia()
  const operacao = useControles.use.operacao()
  const setDia = useControles.use.setDia()
  const fetchOperacaoDiario = useControles.use.fetchOperacaoDiario()
  const operacaoDiario = useControles.use.operacaoDiario()

  React.useEffect(() => {
    fetchOperacaoDiario()
  }, [mes, operacao])

  return (
    <Table
      rows={operacaoDiario || []}
      columns={operacaoDiarioSchema}
      selection={dia}
      onSelection={setDia}
      getId={(rec: any) => [['dia', rec.dia]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
