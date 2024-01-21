import { Table } from '@/client/components/table-full/table.js'
import { TEsterilizacaoInternaStore } from '@/client/pages/industrial/controles/components/est-int/est-int-store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { EsterilizacaoInternaProdutoSchema } from './est-int-produto.schema.js'

type EsterilizacaoInternaProdutoProp = {
  children?: any
  store: TEsterilizacaoInternaStore
}

export function EsterilizacaoInternaProduto({
  children,
  store,
}: EsterilizacaoInternaProdutoProp) {
  const { produto, dia, esterilizacaoInternaProduto } = useSnapshot(store.state)
  const setProduto = store.setProduto
  const fetchEsterilizacaoInternaProduto =
    store.fetchEsterilizacaoInternaProduto

  React.useEffect(() => {
    fetchEsterilizacaoInternaProduto(dia as ['dia', string][])
  }, [dia])

  return (
    <Table
      rows={esterilizacaoInternaProduto as any}
      columns={EsterilizacaoInternaProdutoSchema}
      selection={produto as any}
      onSelection={setProduto}
      getId={(rec: any) => [['produto', rec.produto]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
