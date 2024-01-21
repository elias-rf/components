import { Table } from '@/client/components/table-full/table.js'
import { TEsterilizacaoExternaStore } from '@/client/pages/industrial/controles/components/est-ext/est-ext.store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { EsterilizacaoExternaProdutoSchema } from './est-ext-produto.schema.js'

type EsterilizacaoExternaProdutoProp = {
  children?: any
  store: TEsterilizacaoExternaStore
}

export function EsterilizacaoExternaProduto({
  children,
  store,
}: EsterilizacaoExternaProdutoProp) {
  const { dia, produto, esterilizacaoExternaProduto } = useSnapshot(store.state)
  const setProduto = store.setProduto
  const fetchEsterilizacaoExternaProduto =
    store.fetchEsterilizacaoExternaProduto

  React.useEffect(() => {
    fetchEsterilizacaoExternaProduto(dia as ['dia', string][])
  }, [dia])

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
