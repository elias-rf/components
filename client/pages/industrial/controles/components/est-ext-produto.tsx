import { Table } from '@/client/components/table-full/table.js'
import { controlesStore } from '@/client/pages/industrial/controles/controles_store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { EsterilizacaoExternaProdutoSchema } from './est-ext-produto_schema.js'

type EsterilizacaoExternaProdutoProp = {
  children?: any
}

export function EsterilizacaoExternaProduto({
  children,
}: EsterilizacaoExternaProdutoProp) {
  const { dia, produto, esterilizacaoExternaProduto } = useSnapshot(
    controlesStore.state
  )
  const setProduto = controlesStore.setProduto
  const fetchEsterilizacaoExternaProduto =
    controlesStore.fetchEsterilizacaoExternaProduto

  React.useEffect(() => {
    fetchEsterilizacaoExternaProduto()
  }, [dia, produto])

  return (
    <Table
      rows={esterilizacaoExternaProduto as any}
      columns={EsterilizacaoExternaProdutoSchema}
      selection={produto as any}
      onSelection={setProduto}
      getId={(rec: any) => [['produto', rec.produto]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
