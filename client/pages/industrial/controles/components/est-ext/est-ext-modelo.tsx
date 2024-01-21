import { Table } from '@/client/components/table-full/table.js'
import { TEsterilizacaoExternaStore } from '@/client/pages/industrial/controles/components/est-ext/est-ext.store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { esterilizacaoExternaModeloSchema } from './est-ext-modelo.schema.js'

export function EsterilizacaoExternaModelo({
  store,
}: {
  store: TEsterilizacaoExternaStore
}) {
  const { dia, produto, esterilizacaoExternaModelo } = useSnapshot(store.state)
  const fetchEsterilizacaoExternaModelo = store.fetchEsterilizacaoExternaModelo

  React.useEffect(() => {
    fetchEsterilizacaoExternaModelo(
      dia as ['dia', string][],
      produto as ['produto', string][]
    )
  }, [dia, produto])

  return (
    <Table
      rows={esterilizacaoExternaModelo as any}
      columns={esterilizacaoExternaModeloSchema}
    />
  )
}
