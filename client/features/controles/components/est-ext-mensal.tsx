import { Table } from '@/client/components/table'
import { useControles } from '@/client/features/controles/controles_store'
import React from 'react'
import { esterilizacaoExternaMensalSchema } from './est-ext-mensal_schema'

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
