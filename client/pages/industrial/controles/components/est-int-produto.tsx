import { Table } from '@/client/components/table-full/table.js'
import { controlesStore } from '@/client/pages/industrial/controles/controles_store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { EsterilizacaoInternaProdutoSchema } from './est-int-produto_schema.js'

type EsterilizacaoInternaProdutoProp = {
  children?: any
}

export function EsterilizacaoInternaProduto({
  children,
}: EsterilizacaoInternaProdutoProp) {
  const { produto, dia, esterilizacaoInternaProduto } = useSnapshot(
    controlesStore.state
  )
  const setProduto = controlesStore.setProduto
  const fetchEsterilizacaoInternaProduto =
    controlesStore.fetchEsterilizacaoInternaProduto

  React.useEffect(() => {
    fetchEsterilizacaoInternaProduto()
  }, [dia, produto])

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
