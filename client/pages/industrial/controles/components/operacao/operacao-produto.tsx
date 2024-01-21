import { Table } from '@/client/components/table-full/table.js'
import { TOperacaoStore } from '@/client/pages/industrial/controles/components/operacao/operacao.store.js'
import React, { ReactNode } from 'react'
import { useSnapshot } from 'valtio'
import { operacaoProdutoSchema } from './operacao-produto.schema.js'

type OperacaoProdutoProps = {
  children?: ReactNode
  store: TOperacaoStore
}

export function OperacaoProduto({ children, store }: OperacaoProdutoProps) {
  const { operacao, dia, produto, operacaoProduto } = useSnapshot(store.state)

  React.useEffect(() => {
    store.fetchOperacaoProduto(
      dia as ['dia', string][],
      operacao as ['operacao', string][]
    )
  }, [dia, operacao])

  return (
    <Table
      rows={operacaoProduto as any}
      columns={operacaoProdutoSchema}
      selection={produto as any}
      onSelection={store.setProduto}
      getId={(rec: any) => [['produto', rec.produto]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
