import { Table } from '@/client/components/table-full/table.js'
import { TOperacaoStore } from '@/client/pages/industrial/controles/components/operacao/operacao.store.js'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { operacaoDiarioSchema } from './operacao-diario.schema.js'

type OperacaoDiarioProp = {
  children?: React.ReactNode
  store: TOperacaoStore
}

export function OperacaoDiario({ children, store }: OperacaoDiarioProp) {
  const mes = store.state((state) => state.mes)
  const operacao = store.state((state) => state.operacao)
  const dia = store.state((state) => state.dia)

  const query = useQuery({
    queryKey: ['operacaoDiario', { mes, operacao }],
    queryFn: () => store.fetchOperacaoDiario(mes, operacao),
  })

  return (
    <Table
      rows={query.data || []}
      columns={operacaoDiarioSchema}
      selection={dia}
      onSelection={store.setDia}
      getId={(rec: any) => [['dia', rec.dia]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
