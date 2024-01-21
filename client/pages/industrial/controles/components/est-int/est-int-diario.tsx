import { Table } from '@/client/components/table-full/table.js'
import { TEsterilizacaoInternaStore } from '@/client/pages/industrial/controles/components/est-int/est-int-store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { esterilizacaoInternaDiarioSchema } from './est-int-diario.schema.js'

type EsterilizacaoInternaDiarioProps = {
  children?: React.ReactNode
  store: TEsterilizacaoInternaStore
}

export function EsterilizacaoInternaDiario({
  children,
  store,
}: EsterilizacaoInternaDiarioProps) {
  const { dia, esterilizacaoInternaDiario, mes } = useSnapshot(store.state)
  const setDia = store.setDia
  const fetchEsterilizacaoInternaDiario = store.fetchEsterilizacaoInternaDiario

  React.useEffect(() => {
    fetchEsterilizacaoInternaDiario(mes as ['mes', string][])
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
