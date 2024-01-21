import { Table } from '@/client/components/table-full/table.js'
import { TEsterilizacaoInternaStore } from '@/client/pages/industrial/controles/components/est-int/est-int-store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { esterilizacaoInternaMensalSchema } from './est-int-mensal.schema.js'

type EsterilizacaoInternaMensalProp = {
  children?: React.ReactNode
  store: TEsterilizacaoInternaStore
}

export function EsterilizacaoInternaMensal({
  children,
  store,
}: EsterilizacaoInternaMensalProp) {
  const { mes, esterilizacaoInternaMensal, mesInicio } = useSnapshot(
    store.state
  )
  const setMes = store.setMes
  const fetchEsterilizacaoInternaMensal = store.fetchEsterilizacaoInternaMensal

  React.useEffect(() => {
    fetchEsterilizacaoInternaMensal(mesInicio as ['mes', string][])
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
