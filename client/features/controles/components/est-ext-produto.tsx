import { Table } from '@/client/components/table'
import { rpc } from '@/rpc/rpc-client'
import { getFieldId } from '@/utils/query/get-field-id'
import React from 'react'
import { EsterilizacaoExternaProdutoSchema } from './est-ext-produto_schema'

type EsterilizacaoExternaProdutoProp = {
  children?: any
  diaCorrente: ['dia', string][]
  produtoCorrente: ['produto', string][]
  onSelection?: (event: any) => void
}

export function EsterilizacaoExternaProduto({
  diaCorrente,
  children,
  produtoCorrente,
  onSelection,
}: EsterilizacaoExternaProdutoProp) {
  const [data, setData] = React.useState<
    {
      produto: string
      quantidade: number
    }[]
  >([])

  React.useEffect(() => {
    async function getData() {
      const data = await rpc.esterilizacaoExterna.produto({
        data: getFieldId('dia', diaCorrente),
      })
      setData(data)
    }
    getData()
  }, [diaCorrente, produtoCorrente])

  return (
    <Table
      rows={data || []}
      columns={EsterilizacaoExternaProdutoSchema}
      selection={produtoCorrente || []}
      onSelection={onSelection}
      getId={(rec: any) => [['produto', rec.produto]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
