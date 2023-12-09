import { Table } from '@/client/components/table/table.js'
import { useControles } from '@/client/features/indutrial/controles/controles_store.js'
import React from 'react'
import { EsterilizacaoExternaProdutoSchema } from './est-ext-produto_schema.js'

type EsterilizacaoExternaProdutoProp = {
  children?: any
}

export function EsterilizacaoExternaProduto({
  children,
}: EsterilizacaoExternaProdutoProp) {
  const dia = useControles.use.dia()
  const produto = useControles.use.produto()
  const setProduto = useControles.use.setProduto()
  const fetchEsterilizacaoExternaProduto =
    useControles.use.fetchEsterilizacaoExternaProduto()
  const esterilizacaoExternaProduto =
    useControles.use.esterilizacaoExternaProduto()

  React.useEffect(() => {
    fetchEsterilizacaoExternaProduto()
  }, [dia, produto])

  return (
    <Table
      rows={esterilizacaoExternaProduto || []}
      columns={EsterilizacaoExternaProdutoSchema}
      selection={produto || []}
      onSelection={setProduto}
      getId={(rec: any) => [['produto', rec.produto]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
