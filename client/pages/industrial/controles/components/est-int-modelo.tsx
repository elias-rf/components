import { Table } from '@/client/components/table-full/table.js'
import { controlesStore } from '@/client/pages/industrial/controles/controles_store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { esterilizacaoInternaModeloSchema } from './est-int-modelo_schema.js'

export function EsterilizacaoInternaModelo() {
  const { dia, produto, esterilizacaoInternaModelo } = useSnapshot(
    controlesStore.state
  )
  const fetchEsterilizacaoInternaModelo =
    controlesStore.fetchEsterilizacaoInternaModelo

  React.useEffect(() => {
    fetchEsterilizacaoInternaModelo()
  }, [dia, produto])

  return (
    <Table
      rows={esterilizacaoInternaModelo as any}
      columns={esterilizacaoInternaModeloSchema}
    ></Table>
  )
}
