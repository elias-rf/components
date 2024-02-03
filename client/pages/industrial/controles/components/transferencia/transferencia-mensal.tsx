import { Table } from '@/client/components/table-full/table.js'
import { TTransferenciaStore } from '@/client/pages/industrial/controles/components/transferencia/transferencia.store.js'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { transferenciaMensalSchema } from './transferencia-mensal.schema.js'

type TransferenciaMensalProps = {
  children?: React.ReactNode
  store: TTransferenciaStore
}

export function TransferenciaMensal({
  children,
  store,
}: TransferenciaMensalProps) {
  const mesInicio = store.state.use.mesInicio()
  const mes = store.state.use.mes()
  const operacao = store.state.use.operacao()

  const query = useQuery({
    queryKey: ['operacaoDiario', { mesInicio, operacao }],
    queryFn: () => store.fetchTransferenciaMensal(mesInicio),
  })

  return (
    <Table
      rows={query.data || []}
      columns={transferenciaMensalSchema}
      selection={mes as any}
      onSelection={store.setMes}
      getId={(rec: any) => [['mes', rec.mes]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
