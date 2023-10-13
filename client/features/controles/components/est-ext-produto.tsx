import { Table } from '@/client/components/table'
import { useControles } from '@/client/features/controles/controles_store'
import React from 'react'
import { EsterilizacaoExternaProdutoSchema } from './est-ext-produto_schema'

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
