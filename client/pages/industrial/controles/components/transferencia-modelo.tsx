import { Table } from '@/client/components/table-full/table.js'
import { transferenciaStore } from '@/client/pages/industrial/controles/transferencia_store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { transferenciaModeloSchema } from './transferencia-modelo_schema.js'

type TransferenciaModeloProps = {
  children?: React.ReactNode
}

export function TransferenciaModelo({ children }: TransferenciaModeloProps) {
  const { dia, transferenciaModelo } = useSnapshot(transferenciaStore.state)
  const fetchTransferenciaModelo = transferenciaStore.fetchTransferenciaModelo

  React.useEffect(() => {
    fetchTransferenciaModelo()
  }, [dia])

  return (
    <Table
      rows={transferenciaModelo as any}
      columns={transferenciaModeloSchema}
    >
      {() => <>{children}</>}
    </Table>
  )
}
