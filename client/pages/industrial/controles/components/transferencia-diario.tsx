import { Table } from '@/client/components/table/table.js'
import { useTransferencia } from '@/client/pages/industrial/controles/transferencia_store.js'
import React, { ReactNode } from 'react'
import { transferenciaDiarioSchema } from './transferencia-diario_schema.js'

type TransferenciaDiarioProps = {
  children?: ReactNode
}

export function TransferenciaDiario({ children }: TransferenciaDiarioProps) {
  const mes = useTransferencia.use.mes()
  const dia = useTransferencia.use.dia()
  const setDia = useTransferencia.use.setDia()
  const fetchTransferenciaDiario =
    useTransferencia.use.fetchTransferenciaDiario()
  const transferenciaDiario = useTransferencia.use.transferenciaDiario()

  React.useEffect(() => {
    fetchTransferenciaDiario()
  }, [mes])

  return (
    <Table
      rows={transferenciaDiario || []}
      columns={transferenciaDiarioSchema}
      selection={dia}
      onSelection={setDia}
      getId={(rec: any) => [['dia', rec.dia]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
