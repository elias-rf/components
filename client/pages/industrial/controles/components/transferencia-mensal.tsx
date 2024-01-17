import { Table } from '@/client/components/table-full/table.js'
import { transferenciaStore } from '@/client/pages/industrial/controles/transferencia_store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { transferenciaMensalSchema } from './transferencia-mensal_schema.js'

type TransferenciaMensalProps = {
  children?: React.ReactNode
}

export function TransferenciaMensal({ children }: TransferenciaMensalProps) {
  const { mes, mesInicio, transferenciaMensal } = useSnapshot(
    transferenciaStore.state
  )
  const setMes = transferenciaStore.setMes
  const fetchTransferenciaMensal = transferenciaStore.fetchTransferenciaMensal

  React.useEffect(() => {
    fetchTransferenciaMensal()
  }, [mesInicio])

  return (
    <Table
      rows={transferenciaMensal as any}
      columns={transferenciaMensalSchema}
      selection={mes as any}
      onSelection={setMes}
      getId={(rec: any) => [['mes', rec.mes]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
