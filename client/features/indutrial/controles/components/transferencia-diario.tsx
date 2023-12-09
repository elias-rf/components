import { Table } from '@/client/components/table/table.js'
import { useControles } from '@/client/features/indutrial/controles/controles_store.js'
import React, { ReactNode } from 'react'
import { transferenciaDiarioSchema } from './transferencia-diario_schema.js'

type TransferenciaDiarioProps = {
  children?: ReactNode
}

export function TransferenciaDiario({ children }: TransferenciaDiarioProps) {
  const mes = useControles.use.mes()
  const dia = useControles.use.dia()
  const setDia = useControles.use.setDia()
  const fetchTransferenciaDiario = useControles.use.fetchTransferenciaDiario()
  const transferenciaDiario = useControles.use.transferenciaDiario()

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
