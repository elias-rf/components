import { Table } from '@/client/components/table-full/table.js'
import { TTransferenciaStore } from '@/client/pages/industrial/controles/components/transferencia/transferencia.store.js'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { transferenciaModeloSchema } from './transferencia-modelo.schema.js'

type TransferenciaModeloProps = {
  children?: React.ReactNode
  store: TTransferenciaStore
}

export function TransferenciaModelo({
  children,
  store,
}: TransferenciaModeloProps) {
  const dia = store.state.use.dia()

  const query = useQuery({
    queryKey: ['operacaoDiario', { dia }],
    queryFn: () => store.fetchTransferenciaModelo(dia),
  })

  React.useEffect(() => {
    store.fetchTransferenciaModelo(dia as ['dia', string][])
  }, [dia])

  return (
    <Table
      rows={query.data || []}
      columns={transferenciaModeloSchema}
    >
      {() => <>{children}</>}
    </Table>
  )
}
