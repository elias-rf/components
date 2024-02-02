import { Table } from '@/client/components/table-full/table.js'
import { TTransferenciaStore } from '@/client/pages/industrial/controles/components/transferencia/transferencia.store.js'
import { useQuery } from '@tanstack/react-query'
import React, { ReactNode } from 'react'
import { transferenciaDiarioSchema } from './transferencia-diario.schema.js'

type TransferenciaDiarioProps = {
  children?: ReactNode
  store: TTransferenciaStore
}

export function TransferenciaDiario({
  children,
  store,
}: TransferenciaDiarioProps) {
  const mes = store.state((state) => state.mes)
  const operacao = store.state((state) => state.operacao)
  const dia = store.state((state) => state.dia)

  const query = useQuery({
    queryKey: ['operacaoDiario', { mes }],
    queryFn: () => store.fetchTransferenciaDiario(mes),
  })

  React.useEffect(() => {
    store.fetchTransferenciaDiario(mes as ['mes', string][])
  }, [mes])

  return (
    <Table
      rows={query.data || []}
      columns={transferenciaDiarioSchema}
      selection={dia as any}
      onSelection={store.setDia}
      getId={(rec: any) => [['dia', rec.dia]]}
    >
      {() => <>{children}</>}
    </Table>
  )
}
