import { Table } from '@/client/components/table/table.js'
import { useControles } from '@/client/features/controles/controles_store.js'
import React from 'react'
import { EsterilizacaoInternaProdutoSchema } from './est-int-produto_schema.js'

type EsterilizacaoInternaProdutoProp = {
  children?: any
}

export function EsterilizacaoInternaProduto({
  children,
}: EsterilizacaoInternaProdutoProp) {
  const produto = useControles.use.produto()
  const setProduto = useControles.use.setProduto()
  const dia = useControles.use.dia()
  const fetchEsterilizacaoInternaProduto =
    useControles.use.fetchEsterilizacaoInternaProduto()
  const esterilizacaoInternaProduto =
    useControles.use.esterilizacaoInternaProduto()

  React.useEffect(() => {
    fetchEsterilizacaoInternaProduto()
  }, [dia, produto])

  return (
    <Table
      rows={esterilizacaoInternaProduto || []}
      columns={EsterilizacaoInternaProdutoSchema}
      selection={produto || []}
      onSelection={setProduto}
      getId={(rec: any) => [['produto', rec.produto]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
