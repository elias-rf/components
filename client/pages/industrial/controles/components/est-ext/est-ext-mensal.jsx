import { useQuery } from '@tanstack/react-query'
import { Table } from '../../../../../components/table-full/table.jsx'
import { esterilizacaoExternaMensalSchema } from './est-ext-mensal.schema.mjs'

export function EsterilizacaoExternaMensal({ children, store }) {
  const mesInicio = store.state.use.mesInicio()
  const mes = store.state.use.mes()

  const query = useQuery({
    queryKey: ['esterilizacaoExternaMensal', { mesInicio }],
    queryFn: () => store.fetchEsterilizacaoExternaMensal(mesInicio),
  })

  return (
    <Table
      rows={query.data || []}
      columns={esterilizacaoExternaMensalSchema}
      selection={mes}
      onSelection={store.setMes}
      getId={(rec) => [['mes', rec.mes]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
