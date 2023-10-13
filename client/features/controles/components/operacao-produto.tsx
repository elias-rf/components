import { Table } from '@/client/components/table'
import { useControles } from '@/client/features/controles/controles_store'
import React, { ReactNode } from 'react'
import { operacaoProdutoSchema } from './operacao-produto_schema'

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
