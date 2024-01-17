import { Table } from '@/client/components/table-full/table.js'
import { transferenciaStore } from '@/client/pages/industrial/controles/transferencia_store.js'
import React, { ReactNode } from 'react'
import { useSnapshot } from 'valtio'
import { transferenciaDiarioSchema } from './transferencia-diario_schema.js'

type TransferenciaDiarioProps = {
  children?: ReactNode
}

export function TransferenciaDiario({ children }: TransferenciaDiarioProps) {
  const { mes, dia, transferenciaDiario } = useSnapshot(
    transferenciaStore.state
  )
  const setDia = transferenciaStore.setDia
  const fetchTransferenciaDiario = transferenciaStore.fetchTransferenciaDiario

  React.useEffect(() => {
    fetchTransferenciaDiario()
  }, [mes])

  return (
    <Table
      rows={transferenciaDiario as any}
      columns={transferenciaDiarioSchema}
      selection={dia as any}
      onSelection={setDia}
      getId={(rec: any) => [['dia', rec.dia]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
