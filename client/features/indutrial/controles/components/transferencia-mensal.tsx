import { Table } from '@/client/components/table/table.js'
import { useControles } from '@/client/features/indutrial/controles/controles_store.js'
import React from 'react'
import { transferenciaMensalSchema } from './transferencia-mensal_schema.js'

type TransferenciaMensalProps = {
  children?: React.ReactNode
}

export function TransferenciaMensal({ children }: TransferenciaMensalProps) {
  const mes = useControles.use.mes()
  const mesInicial = useControles.use.mesInicio()
  const setMes = useControles.use.setMes()
  const fetchTransferenciaMensal = useControles.use.fetchTransferenciaMensal()
  const transferenciaMensal = useControles.use.transferenciaMensal()

  React.useEffect(() => {
    fetchTransferenciaMensal()
  }, [mesInicial])

  return (
    <Table
      rows={transferenciaMensal || []}
      columns={transferenciaMensalSchema}
      selection={mes}
      onSelection={setMes}
      getId={(rec: any) => [['mes', rec.mes]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
