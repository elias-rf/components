import { Table } from '@/client/components/table'
import { useControles } from '@/client/features/controles/controles_store'
import React from 'react'
import { esterilizacaoExternaDiarioSchema } from './est-ext-diario_schema'

type TEsterilizacaoExternaDiarioProp = {
  children?: React.ReactNode
}

export function EsterilizacaoExternaDiario({
  children,
}: TEsterilizacaoExternaDiarioProp) {
  const mes = useControles.use.mes()
  const dia = useControles.use.dia()
  const setDia = useControles.use.setDia()
  const fetchEsterilizacaoExternaDiario =
    useControles.use.fetchEsterilizacaoExternaDiario()
  const esterilizacaoExternaDiario =
    useControles.use.esterilizacaoExternaDiario()

  React.useEffect(() => {
    fetchEsterilizacaoExternaDiario()
  }, [mes])

  return (
    <Table
      rows={esterilizacaoExternaDiario || []}
      columns={esterilizacaoExternaDiarioSchema}
      selection={dia || []}
      onSelection={setDia}
      getId={(rec: any) => [['dia', rec.dia]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
