import { Table } from '@/client/components/table'
import { rpc } from '@/rpc/rpc-client'
import { TId } from '@/types'
import { getFieldId } from '@/utils/query/get-field-id'
import React from 'react'
import { transferenciaModeloSchema } from './transferencia-modelo_schema'

type TransferenciaModeloProps = {
  diaCorrente: TId<'dia'>
  children?: React.ReactNode
}

export function TransferenciaModelo({
  diaCorrente,
  children,
}: TransferenciaModeloProps) {
  const [data, setData] = React.useState<
    { modelo: string; quantidade: number }[]
  >([])

  React.useEffect(() => {
    async function getData() {
      const data = await rpc.nfSaida.transferenciaModelo({
        data: getFieldId('dia', diaCorrente),
      })
      setData(data)
    }
    getData()
  }, [diaCorrente])

  return (
    <Table
      rows={data}
      columns={transferenciaModeloSchema}
    >
      {() => <>{children}</>}
    </Table>
  )
}
