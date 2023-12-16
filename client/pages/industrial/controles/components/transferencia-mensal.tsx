import { Table } from '@/client/components/table/table.js'
import { useTransferencia } from '@/client/pages/industrial/controles/transferencia_store.js'
import React from 'react'
import { transferenciaMensalSchema } from './transferencia-mensal_schema.js'

type TransferenciaMensalProps = {
  children?: React.ReactNode
}

export function TransferenciaMensal({ children }: TransferenciaMensalProps) {
  const mes = useTransferencia.use.mes()
  const mesInicial = useTransferencia.use.mesInicio()
  const setMes = useTransferencia.use.setMes()
  const fetchTransferenciaMensal =
    useTransferencia.use.fetchTransferenciaMensal()
  const transferenciaMensal = useTransferencia.use.transferenciaMensal()

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
