import { Table } from '@/client/components/table'
import { rpc } from '@/rpc/rpc-client'
import { day } from '@/utils/date/day'
import React from 'react'
import { getSchema } from './get-shema'

type ClienteValorProps = {
  id: number
  dia?: string
}

export function ClienteValor({ id, dia }: ClienteValorProps) {
  const [data, setData] = React.useState<any[]>([])
  const inicio = day(dia)
    .subtract(1, 'year')
    .startOf('month')
    .format('YYYY-MM-DD')
  const fim = day(dia).subtract(1, 'month').endOf('month').format('YYYY-MM-DD')
  const columns = getSchema({ inicio, fim })

  React.useEffect(() => {
    async function getData() {
      const data = await rpc.cliente.vendaMensalValor({
        inicio,
        fim,
        cliente: id,
      })
      setData(data)
    }
    getData()
  }, [inicio, fim, id])

  return (
    <>
      <div></div>
      <Table
        rows={data ?? []}
        columns={columns}
      />
    </>
  )
}
