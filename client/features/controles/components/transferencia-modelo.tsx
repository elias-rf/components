import { Table } from '@/client/components/table'
import { useControles } from '@/client/features/controles/controles_store'
import React from 'react'
import { transferenciaModeloSchema } from './transferencia-modelo_schema'

type TransferenciaModeloProps = {
  children?: React.ReactNode
}

export function TransferenciaModelo({ children }: TransferenciaModeloProps) {
  const dia = useControles.use.dia()
  const fetchTransferenciaModelo = useControles.use.fetchTransferenciaModelo()
  const transferenciaModelo = useControles.use.transferenciaModelo()

  React.useEffect(() => {
    fetchTransferenciaModelo()
  }, [dia])

  return (
    <Table
      rows={transferenciaModelo}
      columns={transferenciaModeloSchema}
    >
      {() => <>{children}</>}
    </Table>
  )
}
