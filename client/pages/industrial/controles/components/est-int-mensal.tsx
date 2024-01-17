import { Table } from '@/client/components/table-full/table.js'
import { controlesStore } from '@/client/pages/industrial/controles/controles_store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { esterilizacaoInternaMensalSchema } from './est-int-mensal_schema.js'

type EsterilizacaoInternaMensalProp = {
  children?: React.ReactNode
}

export function EsterilizacaoInternaMensal({
  children,
}: EsterilizacaoInternaMensalProp) {
  const { mes, esterilizacaoInternaMensal, mesInicio } = useSnapshot(
    controlesStore.state
  )
  const setMes = controlesStore.setMes
  const fetchEsterilizacaoInternaMensal =
    controlesStore.fetchEsterilizacaoInternaMensal

  React.useEffect(() => {
    fetchEsterilizacaoInternaMensal()
  }, [mesInicio])

  return (
    <Table
      rows={esterilizacaoInternaMensal as any}
      columns={esterilizacaoInternaMensalSchema}
      selection={mes as any}
      onSelection={setMes}
      getId={(rec: any) => [['mes', rec.mes]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
