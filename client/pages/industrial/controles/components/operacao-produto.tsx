import { Table } from '@/client/components/table-full/table.js'
import { controlesStore } from '@/client/pages/industrial/controles/controles_store.js'
import React, { ReactNode } from 'react'
import { useSnapshot } from 'valtio'
import { operacaoProdutoSchema } from './operacao-produto_schema.js'

type OperacaoProdutoProps = {
  children?: ReactNode
}

export function OperacaoProduto({ children }: OperacaoProdutoProps) {
  const { operacao, dia, produto, operacaoProduto } = useSnapshot(
    controlesStore.state
  )
  const setProduto = controlesStore.setProduto
  const fetchOperacaoProduto = controlesStore.fetchOperacaoProduto

  React.useEffect(() => {
    fetchOperacaoProduto()
  }, [dia, operacao])

  return (
    <Table
      rows={operacaoProduto as any}
      columns={operacaoProdutoSchema}
      selection={produto as any}
      onSelection={setProduto}
      getId={(rec: any) => [['produto', rec.produto]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
