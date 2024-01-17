import { Table } from '@/client/components/table-full/table.js'
import { controlesStore } from '@/client/pages/industrial/controles/controles_store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { esterilizacaoExternaMensalSchema } from './est-ext-mensal_schema.js'

type EsterilizacaoExternaMensalProp = {
  children?: React.ReactNode
}

export function EsterilizacaoExternaMensal({
  children,
}: EsterilizacaoExternaMensalProp) {
  const { mes, mesInicio, esterilizacaoExternaMensal } = useSnapshot(
    controlesStore.state
  )
  const setMes = controlesStore.setMes
  const fetchEsterilizacaoExternaMensal =
    controlesStore.fetchEsterilizacaoExternaMensal

  React.useEffect(() => {
    fetchEsterilizacaoExternaMensal()
  }, [mesInicio])

  return (
    <Table
      rows={esterilizacaoExternaMensal as any}
      columns={esterilizacaoExternaMensalSchema}
      selection={mes as any}
      onSelection={setMes}
      getId={(rec: any) => [['mes', rec.mes]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
