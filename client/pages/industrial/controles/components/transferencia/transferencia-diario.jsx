import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Table } from '../../../../../components/table-full/table.jsx'
import { transferenciaDiarioSchema } from './transferencia-diario.schema.mjs'

export function TransferenciaDiario({ children, store }) {
  const mes = store.state.use.mes()
  const operacao = store.state.use.operacao()
  const dia = store.state.use.dia()

  const query = useQuery({
    queryKey: ['operacaoDiario', { mes }],
    queryFn: () => store.fetchTransferenciaDiario(mes),
  })

  React.useEffect(() => {
    store.fetchTransferenciaDiario(mes)
  }, [mes])

  return (
    <Table
      rows={query.data || []}
      columns={transferenciaDiarioSchema}
      selection={dia}
      onSelection={store.setDia}
      getId={(rec) => [['dia', rec.dia]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
