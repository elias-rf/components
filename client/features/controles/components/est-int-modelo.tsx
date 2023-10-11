import { Table } from '@/client/components/table'
import { rpc } from '@/rpc/rpc-client'
import { getFieldId } from '@/utils/query/get-field-id'
import React from 'react'
import { esterilizacaoInternaModeloSchema } from './est-int-modelo_schema'

type EsterilizacaoInternaModeloProp = {
  diaCorrente: ['dia', string][]
  produtoCorrente: ['produto', string][]
}

export function EsterilizacaoInternaModelo({
  diaCorrente,
  produtoCorrente,
}: EsterilizacaoInternaModeloProp) {
  const [data, setData] = React.useState<
    { modelo: string; quantidade: number }[]
  >([])

  React.useEffect(() => {
    async function getData() {
      const data = await rpc.esterilizacaoInterna.modelo({
        data: getFieldId('dia', diaCorrente),
        produto: getFieldId('produto', produtoCorrente),
      })
      setData(data)
    }
    getData()
  }, [diaCorrente, produtoCorrente])

  return (
    <Table
      rows={data || []}
      columns={esterilizacaoInternaModeloSchema}
    ></Table>
  )
}
