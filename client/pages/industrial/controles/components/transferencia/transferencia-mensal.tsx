import { Table } from '@/client/components/table-full/table.js'
import { TTransferenciaStore } from '@/client/pages/industrial/controles/components/transferencia/transferencia.store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { transferenciaMensalSchema } from './transferencia-mensal.schema.js'

type TransferenciaMensalProps = {
  children?: React.ReactNode
  store: TTransferenciaStore
}

export function TransferenciaMensal({
  children,
  store,
}: TransferenciaMensalProps) {
  const { mes, mesInicio, transferenciaMensal } = useSnapshot(store.state)

  React.useEffect(() => {
    store.fetchTransferenciaMensal(mesInicio as ['mes', string][])
  }, [mesInicio])

  return (
    <Table
      rows={transferenciaMensal as any}
      columns={transferenciaMensalSchema}
      selection={mes as any}
      onSelection={store.setMes}
      getId={(rec: any) => [['mes', rec.mes]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
