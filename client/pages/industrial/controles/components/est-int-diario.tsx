import { Table } from '@/client/components/table/table.js'
import { useControles } from '@/client/pages/industrial/controles/controles_store.js'
import React from 'react'
import { esterilizacaoInternaDiarioSchema } from './est-int-diario_schema.js'

type EsterilizacaoInternaDiarioProps = {
  children?: React.ReactNode
}

export function EsterilizacaoInternaDiario({
  children,
}: EsterilizacaoInternaDiarioProps) {
  const dia = useControles.use.dia()
  const setDia = useControles.use.setDia()
  const mes = useControles.use.mes()
  const fetchEsterilizacaoInternaDiario =
    useControles.use.fetchEsterilizacaoInternaDiario()
  const esterilizacaoInternaDiario =
    useControles.use.esterilizacaoInternaDiario()

  React.useEffect(() => {
    fetchEsterilizacaoInternaDiario()
  }, [mes])

  return (
    <Table
      rows={esterilizacaoInternaDiario || []}
      columns={esterilizacaoInternaDiarioSchema}
      selection={dia || []}
      onSelection={setDia}
      getId={(rec: any) => [['dia', rec.dia]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}