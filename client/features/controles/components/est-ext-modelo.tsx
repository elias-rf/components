import { Table } from '@/client/components/table'
import { rpc } from '@/rpc/rpc-client'
import { getFieldId } from '@/utils/query/get-field-id'
import React from 'react'
import { esterilizacaoExternaModeloSchema } from './est-ext-modelo_schema'

type EsterilizacaoExternaModeloProp = {
  diaCorrente: ['dia', string][]
  produtoCorrente: ['produto', string][]
}

export function EsterilizacaoExternaModelo({
  diaCorrente,
  produtoCorrente,
}: EsterilizacaoExternaModeloProp) {
  const [data, setData] = React.useState<
    { modelo: string; quantidade: number }[]
  >([])

  React.useEffect(() => {
    async function getData() {
      const data = await rpc.esterilizacaoExterna.modelo({
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
      columns={esterilizacaoExternaModeloSchema}
    />
  )
}
