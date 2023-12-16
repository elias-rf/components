import { Table } from '@/client/components/table/table.js'
import { useTransferencia } from '@/client/pages/industrial/controles/transferencia_store.js'
import React from 'react'
import { transferenciaModeloSchema } from './transferencia-modelo_schema.js'

type TransferenciaModeloProps = {
  children?: React.ReactNode
}

export function TransferenciaModelo({ children }: TransferenciaModeloProps) {
  const dia = useTransferencia.use.dia()
  const fetchTransferenciaModelo =
    useTransferencia.use.fetchTransferenciaModelo()
  const transferenciaModelo = useTransferencia.use.transferenciaModelo()

  React.useEffect(() => {
    fetchTransferenciaModelo()
  }, [dia])

  return (
    <Table
      rows={transferenciaModelo}
      columns={transferenciaModeloSchema}
    >
      {() => <>{children}</>}
    </Table>
  )
}
