import { useQuery } from '@tanstack/react-query'
import { Table } from '../../../../../components_/table-full/table.jsx'
import { esterilizacaoInternaMensalSchema } from './est-int-mensal.schema.mjs'

export function EsterilizacaoInternaMensal({ children, store }) {
  const mes = store.state.use.mes()
  const mesInicio = store.state.use.mesInicio()

  const query = useQuery({
    queryKey: ['esterilizacaoInternaMensal', { mesInicio }],
    queryFn: () => store.fetchEsterilizacaoInternaMensal(mesInicio),
  })

  return (
    <Table
      rows={query.data || []}
      columns={esterilizacaoInternaMensalSchema}
      selection={mes}
      onSelection={store.setMes}
      getId={(rec) => [['mes', rec.mes]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
