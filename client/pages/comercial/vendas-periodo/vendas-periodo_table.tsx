import { Title } from '@/client/components/ui-old/title.js'
import { vendasPeriodoStore } from '@/client/pages/comercial/vendas-periodo/vendas-periodo.store.js'
import { toast } from 'react-hot-toast'

import { useEffectOnce } from 'usehooks-ts'

/**
 * Componente para manipular Agenda de Ramais
 *
 * @returns {*} componente react
 */
export function VendasPeriodo() {
  const fetchList = vendasPeriodoStore.use.fetchList()

  useEffectOnce(() => {
    toast.promise(
      fetchList(),
      {
        loading: 'lendo...',
        success: 'sucesso!',
        error: 'Erro ao carregar vendas!',
      },
      {
        id: 'vendasPeriodo-table',
      }
    )
  })

  return (
    <>
      <Title>Vendas no Período</Title>
      <div className="py-2">
        <h2 className={'text-center text-lg dark:text-gray-100'}>Liteflex</h2>
      </div>
    </>
  )
}
