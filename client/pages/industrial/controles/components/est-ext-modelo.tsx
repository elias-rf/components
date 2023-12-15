import { Table } from '@/client/components/table/table.js'
import { useControles } from '@/client/pages/industrial/controles/controles_store.js'
import React from 'react'
import { esterilizacaoExternaModeloSchema } from './est-ext-modelo_schema.js'

export function EsterilizacaoExternaModelo() {
  const dia = useControles.use.dia()
  const produto = useControles.use.produto()
  const fetchEsterilizacaoExternaModelo =
    useControles.use.fetchEsterilizacaoExternaModelo()
  const esterilizacaoExternaModelo =
    useControles.use.esterilizacaoExternaModelo()

  React.useEffect(() => {
    fetchEsterilizacaoExternaModelo()
  }, [dia, produto])

  return (
    <Table
      rows={esterilizacaoExternaModelo || []}
      columns={esterilizacaoExternaModeloSchema}
    />
  )
}
