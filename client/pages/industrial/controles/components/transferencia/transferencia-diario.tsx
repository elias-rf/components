import { Table } from '@/client/components/table-full/table.js'
import { TTransferenciaStore } from '@/client/pages/industrial/controles/components/transferencia/transferencia.store.js'
import React, { ReactNode } from 'react'
import { useSnapshot } from 'valtio'
import { transferenciaDiarioSchema } from './transferencia-diario.schema.js'

type TransferenciaDiarioProps = {
  children?: ReactNode
  store: TTransferenciaStore
}

export function TransferenciaDiario({
  children,
  store,
}: TransferenciaDiarioProps) {
  const { mes, dia, transferenciaDiario } = useSnapshot(store.state)

  React.useEffect(() => {
    store.fetchTransferenciaDiario(mes as ['mes', string][])
  }, [mes])

  return (
    <Table
      rows={transferenciaDiario as any}
      columns={transferenciaDiarioSchema}
      selection={dia as any}
      onSelection={store.setDia}
      getId={(rec: any) => [['dia', rec.dia]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
