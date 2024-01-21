import { Table } from '@/client/components/table-full/table.js'
import { TTransferenciaStore } from '@/client/pages/industrial/controles/components/transferencia/transferencia.store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { transferenciaModeloSchema } from './transferencia-modelo.schema.js'

type TransferenciaModeloProps = {
  children?: React.ReactNode
  store: TTransferenciaStore
}

export function TransferenciaModelo({
  children,
  store,
}: TransferenciaModeloProps) {
  const { dia, transferenciaModelo } = useSnapshot(store.state)

  React.useEffect(() => {
    store.fetchTransferenciaModelo(dia as ['dia', string][])
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
