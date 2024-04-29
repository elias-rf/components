import { useQuery } from '@tanstack/react-query'
import { Table } from '../../../../../components/table-full/table.jsx'
import { esterilizacaoExternaDiarioSchema } from './est-ext-diario.schema.mjs'

export function EsterilizacaoExternaDiario({ children, store }) {
  const mes = store.state.use.mes()
  const dia = store.state.use.dia()

  const query = useQuery({
    queryKey: ['esterilizacaoExternaDiario', { mes }],
    queryFn: () => store.fetchEsterilizacaoExternaDiario(mes),
  })

  return (
    <Table
      rows={query.data || []}
      columns={esterilizacaoExternaDiarioSchema}
      selection={dia}
      onSelection={store.setDia}
      getId={(rec) => [['dia', rec.dia]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
