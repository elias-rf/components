import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Table } from '../../../../../components_/table-full/table.jsx'
import { transferenciaModeloSchema } from './transferencia-modelo.schema.mjs'

export function TransferenciaModelo({ children, store }) {
  const dia = store.state.use.dia()

  const query = useQuery({
    queryKey: ['operacaoDiario', { dia }],
    queryFn: () => store.fetchTransferenciaModelo(dia),
  })

  React.useEffect(() => {
    store.fetchTransferenciaModelo(dia)
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
