import { Table } from '@/client/components/table'
import { rpc } from '@/rpc/rpc-client'
import { TSelection } from '@/types'
import { getFieldId } from '@/utils/query/get-field-id'
import React from 'react'
import toast from 'react-hot-toast'
import { operacaoMensalSchema } from './operacao-mensal_schema'

type OperacaoMensalProps = {
  children?: React.ReactNode
  mesCorrente: ['mes', string][]
  mesInicial: ['mes', string][]
  onSelection?: (event: TSelection<any>) => void
  operacao: ['operacao', string][]
}

export function OperacaoMensal({
  operacao,
  mesInicial,
  mesCorrente,
  children,
  onSelection,
}: OperacaoMensalProps) {
  const [data, setData] = React.useState<
    {
      mes: string
      quantidade: number
    }[]
  >([])

  React.useEffect(() => {
    rpc.ordemProducaoOperacao
      .mensal({
        operacao: getFieldId('operacao', operacao) || '',
        mes: getFieldId('mes', mesInicial),
      })
      .then((data) => {
        setData(data)
        return
      })
      .catch((e: any) => {
        setData([])
        toast.error(e.message || 'Erro ao carregar dados')
      })
  }, [mesInicial, operacao])

  return (
    <>
      <Table
        rows={data || []}
        columns={operacaoMensalSchema}
        selection={mesCorrente}
        onSelection={onSelection}
        getId={(rec: any) => [['mes', rec.mes]]}
      >
        {() => <>{children}</>}
      </Table>
    </>
  )
}
