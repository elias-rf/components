import { Table } from '@/client/components/table'
import { useControles } from '@/client/features/controles/controles_store'
import React from 'react'
import { esterilizacaoInternaMensalSchema } from './est-int-mensal_schema'

type EsterilizacaoInternaMensalProp = {
  children?: React.ReactNode
}

export function EsterilizacaoInternaMensal({
  children,
}: EsterilizacaoInternaMensalProp) {
  const mes = useControles.use.mes()
  const setMes = useControles.use.setMes()
  const mesInicial = useControles.use.mesInicio()
  const fetchEsterilizacaoInternaMensal =
    useControles.use.fetchEsterilizacaoInternaMensal()
  const esterilizacaoInternaMensal =
    useControles.use.esterilizacaoInternaMensal()

  React.useEffect(() => {
    fetchEsterilizacaoInternaMensal()
  }, [mesInicial])

  return (
    <Table
      rows={esterilizacaoInternaMensal || []}
      columns={esterilizacaoInternaMensalSchema}
      selection={mes}
      onSelection={setMes}
      getId={(rec: any) => [['mes', rec.mes]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
