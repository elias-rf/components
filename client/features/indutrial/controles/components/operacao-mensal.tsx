import { Table } from '@/client/components/table/table.js'
import { useControles } from '@/client/features/indutrial/controles/controles_store.js'
import React from 'react'
import { operacaoMensalSchema } from './operacao-mensal_schema.js'

type OperacaoMensalProps = {
  children?: React.ReactNode
}

export function OperacaoMensal({ children }: OperacaoMensalProps) {
  const mes = useControles.use.mes()
  const mesInicial = useControles.use.mesInicio()
  const operacao = useControles.use.operacao()
  const setMes = useControles.use.setMes()
  const fetchOperacaoMensal = useControles.use.fetchOperacaoMensal()
  const operacaoMensal = useControles.use.operacaoMensal()

  React.useEffect(() => {
    fetchOperacaoMensal()
  }, [mesInicial, operacao])

  return (
    <>
      <Table
        rows={operacaoMensal || []}
        columns={operacaoMensalSchema}
        selection={mes}
        onSelection={setMes}
        getId={(rec: any) => [['mes', rec.mes]]}
      >
        {() => <>{children}</>}
      </Table>
    </>
  )
}
