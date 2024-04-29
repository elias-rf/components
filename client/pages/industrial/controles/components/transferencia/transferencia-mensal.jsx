import { useQuery } from '@tanstack/react-query'
import { Table } from '../../../../../components/table-full/table.jsx'
import { transferenciaMensalSchema } from './transferencia-mensal.schema.mjs'

export function TransferenciaMensal({ children, store }) {
  const mesInicio = store.state.use.mesInicio()
  const mes = store.state.use.mes()
  const operacao = store.state.use.operacao()

  const query = useQuery({
    queryKey: ['operacaoDiario', { mesInicio, operacao }],
    queryFn: () => store.fetchTransferenciaMensal(mesInicio),
  })

  return (
    <Table
      rows={query.data || []}
      columns={transferenciaMensalSchema}
      selection={mes}
      onSelection={store.setMes}
      getId={(rec) => [['mes', rec.mes]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
