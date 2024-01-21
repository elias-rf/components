import { Table } from '@/client/components/table-full/table.js'
import { TEsterilizacaoExternaStore } from '@/client/pages/industrial/controles/components/est-ext/est-ext.store.js'
import React from 'react'
import { useSnapshot } from 'valtio'
import { esterilizacaoExternaDiarioSchema } from './est-ext-diario.schema.js'

type TEsterilizacaoExternaDiarioProp = {
  children?: React.ReactNode
  store: TEsterilizacaoExternaStore
}

export function EsterilizacaoExternaDiario({
  children,
  store,
}: TEsterilizacaoExternaDiarioProp) {
  const { mes, dia, esterilizacaoExternaDiario } = useSnapshot(store.state)

  React.useEffect(() => {
    store.fetchEsterilizacaoExternaDiario(mes as ['mes', string][])
  }, [mes])

  return (
    <Table
      rows={esterilizacaoExternaDiario as any}
      columns={esterilizacaoExternaDiarioSchema}
      selection={dia as any}
      onSelection={store.setDia}
      getId={(rec: any) => [['dia', rec.dia]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
