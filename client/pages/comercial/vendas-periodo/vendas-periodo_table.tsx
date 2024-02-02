import { Title } from '@/client/components/title/title.js'
import { vendasPeriodoStore } from '@/client/pages/comercial/vendas-periodo/vendas-periodo.store.js'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'

import { useEffectOnce } from 'usehooks-ts'

/**
 * Componente para manipular Agenda de Ramais
 *
 * @returns {*} componente react
 */
export function VendasPeriodo() {
  const inicio = vendasPeriodoStore.state((state) => state.inicio)
  const fim = vendasPeriodoStore.state((state) => state.fim)

  const query = useQuery({
    queryKey: ['vendasPeriodo', { inicio, fim }],
    queryFn: () => vendasPeriodoStore.fetchList({ inicio, fim }),
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
