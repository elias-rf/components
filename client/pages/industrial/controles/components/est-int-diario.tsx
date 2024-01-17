import { Table } from '@/client/components/table-full/table.js'
import { controlesStore } from '@/client/pages/industrial/controles/controles_store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { esterilizacaoInternaDiarioSchema } from './est-int-diario_schema.js'

type EsterilizacaoInternaDiarioProps = {
  children?: React.ReactNode
}

export function EsterilizacaoInternaDiario({
  children,
}: EsterilizacaoInternaDiarioProps) {
  const { dia, esterilizacaoInternaDiario, mes } = useSnapshot(
    controlesStore.state
  )
  const setDia = controlesStore.setDia
  const fetchEsterilizacaoInternaDiario =
    controlesStore.fetchEsterilizacaoInternaDiario

  React.useEffect(() => {
    fetchEsterilizacaoInternaDiario()
  }, [mes])

  return (
    <Table
      rows={esterilizacaoInternaDiario as any}
      columns={esterilizacaoInternaDiarioSchema}
      selection={dia as any}
      onSelection={setDia}
      getId={(rec: any) => [['dia', rec.dia]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
