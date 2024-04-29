import { useQuery } from '@tanstack/react-query'
import { Table } from '../../../../../components/table-full/table.jsx'
import { esterilizacaoInternaDiarioSchema } from './est-int-diario.schema.mjs'

export function EsterilizacaoInternaDiario({ children, store }) {
  const mes = store.state.use.mes()
  const dia = store.state.use.dia()

  const query = useQuery({
    queryKey: ['esterilizacaoInternaDiario', { mes }],
    queryFn: () => store.fetchEsterilizacaoInternaDiario(mes),
  })

  return (
    <Table
      rows={query.data || []}
      columns={esterilizacaoInternaDiarioSchema}
      selection={dia}
      onSelection={store.setDia}
      getId={(rec) => [['dia', rec.dia]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
