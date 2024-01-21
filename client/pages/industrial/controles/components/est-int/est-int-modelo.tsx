import { Table } from '@/client/components/table-full/table.js'
import { TEsterilizacaoInternaStore } from '@/client/pages/industrial/controles/components/est-int/est-int-store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { esterilizacaoInternaModeloSchema } from './est-int-modelo.schema.js'

export function EsterilizacaoInternaModelo({
  store,
}: {
  store: TEsterilizacaoInternaStore
}) {
  const { dia, produto, esterilizacaoInternaModelo } = useSnapshot(store.state)
  const fetchEsterilizacaoInternaModelo = store.fetchEsterilizacaoInternaModelo

  React.useEffect(() => {
    fetchEsterilizacaoInternaModelo(
      dia as ['dia', string][],
      produto as ['produto', string][]
    )
  }, [dia, produto])

  return (
    <Table
      rows={esterilizacaoInternaModelo as any}
      columns={esterilizacaoInternaModeloSchema}
    ></Table>
  )
}
