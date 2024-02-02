import { Table } from '@/client/components/table-full/table.js'
import { TOperacaoStore } from '@/client/pages/industrial/controles/components/operacao/operacao.store.js'
import { useQuery } from '@tanstack/react-query'
import { operacaoModeloSchema } from './operacao-modelo.schema.js'

export function OperacaoModelo({ store }: { store: TOperacaoStore }) {
  const mes = store.state((state) => state.mes)
  const operacao = store.state((state) => state.operacao)
  const dia = store.state((state) => state.dia)
  const produto = store.state((state) => state.produto)

  const query = useQuery({
    queryKey: ['operacaoModelo', { mes }],
    queryFn: () => store.fetchOperacaoModelo(dia, produto, operacao),
  })

  return (
    <Table
      rows={query.data || []}
      columns={operacaoModeloSchema}
    ></Table>
  )
}
