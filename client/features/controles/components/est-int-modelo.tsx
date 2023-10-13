import { Table } from '@/client/components/table'
import { useControles } from '@/client/features/controles/controles_store'
import React from 'react'
import { esterilizacaoInternaModeloSchema } from './est-int-modelo_schema'

export function EsterilizacaoInternaModelo() {
  const dia = useControles.use.dia()
  const produto = useControles.use.produto()
  const fetchEsterilizacaoInternaModelo =
    useControles.use.fetchEsterilizacaoInternaModelo()
  const esterilizacaoInternaModelo =
    useControles.use.esterilizacaoInternaModelo()

  React.useEffect(() => {
    fetchEsterilizacaoInternaModelo()
  }, [dia, produto])

  return (
    <Table
      rows={esterilizacaoInternaModelo || []}
      columns={esterilizacaoInternaModeloSchema}
    ></Table>
  )
}
