import { Table } from '@/client/components/table/table.js'
import { useControles } from '@/client/features/indutrial/controles/controles_store.js'
import React, { ReactNode } from 'react'
import { operacaoProdutoSchema } from './operacao-produto_schema.js'

type OperacaoProdutoProps = {
  children?: ReactNode
}

export function OperacaoProduto({ children }: OperacaoProdutoProps) {
  const operacao = useControles.use.operacao()
  const dia = useControles.use.dia()
  const produto = useControles.use.produto()
  const setProduto = useControles.use.setProduto()
  const fetchOperacaoProduto = useControles.use.fetchOperacaoProduto()
  const operacaoProduto = useControles.use.operacaoProduto()

  React.useEffect(() => {
    fetchOperacaoProduto()
  }, [dia, operacao])

  return (
    <Table
      rows={operacaoProduto || []}
      columns={operacaoProdutoSchema}
      selection={produto}
      onSelection={setProduto}
      getId={(rec: any) => [['produto', rec.produto]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
