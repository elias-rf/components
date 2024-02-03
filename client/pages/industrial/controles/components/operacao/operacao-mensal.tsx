import { Table } from '@/client/components/table-full/table.js'
import { TOperacaoStore } from '@/client/pages/industrial/controles/components/operacao/operacao.store.js'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { operacaoMensalSchema } from './operacao-mensal.schema.js'

type OperacaoMensalProps = {
  children?: React.ReactNode
  store: TOperacaoStore
}

export function OperacaoMensal({ children, store }: OperacaoMensalProps) {
  const mes = store.state.use.mes()
  const operacao = store.state.use.operacao()
  const mesInicio = store.state.use.mesInicio()

  const query = useQuery({
    queryKey: ['operacaoMensal', { mesInicio, operacao }],
    queryFn: () => store.fetchOperacaoMensal(mesInicio, operacao),
  })

  return (
    <>
      <Table
        rows={query.data || []}
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
