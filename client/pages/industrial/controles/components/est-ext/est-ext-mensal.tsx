import { Table } from '@/client/components/table-full/table.js'
import { TEsterilizacaoExternaStore } from '@/client/pages/industrial/controles/components/est-ext/est-ext.store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { esterilizacaoExternaMensalSchema } from './est-ext-mensal.schema.js'

type EsterilizacaoExternaMensalProp = {
  children?: React.ReactNode
  store: TEsterilizacaoExternaStore
}

export function EsterilizacaoExternaMensal({
  children,
  store,
}: EsterilizacaoExternaMensalProp) {
  const { mes, esterilizacaoExternaMensal, mesInicio } = useSnapshot(
    store.state
  )

  React.useEffect(() => {
    store.fetchEsterilizacaoExternaMensal(mesInicio as ['mes', string][])
  }, [mesInicio])

  return (
    <Table
      rows={esterilizacaoExternaMensal as any}
      columns={esterilizacaoExternaMensalSchema}
      selection={mes as any}
      onSelection={store.setMes}
      getId={(rec: any) => [['mes', rec.mes]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
