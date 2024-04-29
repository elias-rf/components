import { useQuery } from '@tanstack/react-query'
import { Table } from '../../../../../components_/table-full/table.jsx'
import { operacaoMensalSchema } from './operacao-mensal.schema.mjs'

export function OperacaoMensal({ children, store }) {
  const mes = store.state.use.mes()
  const operacao = store.state.use.operacao()
  const mesInicio = store.state.use.mesInicio()

  const query = useQuery({
    queryKey: ['operacaoMensal', { mesInicio, operacao }],
    queryFn: () => store.fetchOperacaoMensal(mesInicio, operacao),
  })

  return (
    <>
      <Table
        rows={query.data || []}
        columns={operacaoMensalSchema}
        selection={mes}
        onSelection={store.setMes}
        getId={(rec) => [['mes', rec.mes]]}
      >
        {() => <>{children}</>}
      </Table>
    </>
  )
}
