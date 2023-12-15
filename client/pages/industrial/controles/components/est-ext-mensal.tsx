import { Table } from '@/client/components/table/table.js'
import { useControles } from '@/client/pages/industrial/controles/controles_store.js'
import React from 'react'
import { esterilizacaoExternaMensalSchema } from './est-ext-mensal_schema.js'

type EsterilizacaoExternaMensalProp = {
  children?: React.ReactNode
}

export function EsterilizacaoExternaMensal({
  children,
}: EsterilizacaoExternaMensalProp) {
  const mes = useControles.use.mes()
  const setMes = useControles.use.setMes()
  const mesInicial = useControles.use.mesInicio()
  const fetchEsterilizacaoExternaMensal =
    useControles.use.fetchEsterilizacaoExternaMensal()
  const esterilizacaoExternaMensal =
    useControles.use.esterilizacaoExternaMensal()

  React.useEffect(() => {
    fetchEsterilizacaoExternaMensal()
  }, [mesInicial])

  return (
    <Table
      rows={esterilizacaoExternaMensal || []}
      columns={esterilizacaoExternaMensalSchema}
      selection={mes || []}
      onSelection={setMes}
      getId={(rec: any) => [['mes', rec.mes]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
