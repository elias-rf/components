import { Table } from '@/client/components/table-full/table.js'
import { controlesStore } from '@/client/pages/industrial/controles/controles_store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { esterilizacaoExternaDiarioSchema } from './est-ext-diario_schema.js'

type TEsterilizacaoExternaDiarioProp = {
  children?: React.ReactNode
}

export function EsterilizacaoExternaDiario({
  children,
}: TEsterilizacaoExternaDiarioProp) {
  const { mes, dia, esterilizacaoExternaDiario } = useSnapshot(
    controlesStore.state
  )
  const setDia = controlesStore.setDia
  const fetchEsterilizacaoExternaDiario =
    controlesStore.fetchEsterilizacaoExternaDiario

  React.useEffect(() => {
    fetchEsterilizacaoExternaDiario()
  }, [mes])

  return (
    <Table
      rows={esterilizacaoExternaDiario as any}
      columns={esterilizacaoExternaDiarioSchema}
      selection={dia as any}
      onSelection={setDia}
      getId={(rec: any) => [['dia', rec.dia]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
