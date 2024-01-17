import { Table } from '@/client/components/table-full/table.js'
import { controlesStore } from '@/client/pages/industrial/controles/controles_store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { esterilizacaoExternaModeloSchema } from './est-ext-modelo_schema.js'

export function EsterilizacaoExternaModelo() {
  const { dia, produto, esterilizacaoExternaModelo } = useSnapshot(
    controlesStore.state
  )
  const fetchEsterilizacaoExternaModelo =
    controlesStore.fetchEsterilizacaoExternaModelo

  React.useEffect(() => {
    fetchEsterilizacaoExternaModelo()
  }, [dia, produto])

  return (
    <Table
      rows={esterilizacaoExternaModelo as any}
      columns={esterilizacaoExternaModeloSchema}
    />
  )
}
