import { useQuery } from '@tanstack/react-query'
import { Table } from '../../../../../components_/table-full/table.jsx'
import { operacaoDiarioSchema } from './operacao-diario.schema.mjs'

export function OperacaoDiario({ children, store }) {
  const mes = store.state.use.mes()
  const operacao = store.state.use.operacao()
  const dia = store.state.use.dia()

  const query = useQuery({
    queryKey: ['operacaoDiario', { mes, operacao }],
    queryFn: () => store.fetchOperacaoDiario(mes, operacao),
  })

  return (
    <Table
      rows={query.data || []}
      columns={operacaoDiarioSchema}
      selection={dia}
      onSelection={store.setDia}
      getId={(rec) => [['dia', rec.dia]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
