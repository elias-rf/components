import { Title } from '@/client/components/ui/title.js'
import { vendas30DiasStore } from '@/client/features/vendas30dias/vendas-30dias.store.js'
import { formatMoney } from '@/utils/format/format-money.js'
import { toast } from 'react-hot-toast'
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { useEffectOnce } from 'usehooks-ts'

/**
 * Componente para manipular Agenda de Ramais
 *
 * @returns {*} componente react
 */
export function Vendas30dias() {
  const list = vendas30DiasStore.use.list()
  const fetchList = vendas30DiasStore.use.fetchList()

  useEffectOnce(() => {
    toast.promise(
      fetchList(),
      {
        loading: 'lendo...',
        success: 'sucesso!',
        error: 'Erro ao carregar vendas!',
      },
      {
        id: 'vendas30dias-table',
      }
    )
  })

  const width = '100%'
  const height = 300

  return (
    <>
      <Title>Vendas 30 dias</Title>
      <div className="py-2">
        <h2 className={'text-center text-lg dark:text-gray-100'}>Liteflex</h2>
        <ResponsiveContainer
          width={width}
          height={height}
        >
          <LineChart
            data={list?.liteflex}
            syncId="implante"
          >
            <Line
              type="monotone"
              yAxisId="right"
              dataKey="valor"
              stroke="#0d0"
              name="Valor médio"
            />
            <Line
              type="monotone"
              yAxisId="left"
              dataKey="quantidade"
              stroke="#58f"
              name="Quantidade"
            />
            <YAxis yAxisId="left" />
            <YAxis
              yAxisId="right"
              orientation="right"
            />
            <XAxis dataKey="dia" />
            <Tooltip
              formatter={(value: number, name: string) =>
                name === 'Valor médio'
                  ? `R$ ${formatMoney(value, 2)}`
                  : value.toString()
              }
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="py-2">
        <h2 className={'text-center text-lg dark:text-gray-100'}>Hilite</h2>
        <ResponsiveContainer
          width={width}
          height={height}
        >
          <LineChart data={list?.hilite}>
            <Line
              type="monotone"
              yAxisId="right"
              dataKey="valor"
              stroke="#0d0"
              name="Valor médio"
            />
            <Line
              type="monotone"
              yAxisId="left"
              dataKey="quantidade"
              stroke="#58f"
              name="Quantidade"
            />
            <YAxis yAxisId="left" />
            <YAxis
              yAxisId="right"
              orientation="right"
            />
            <XAxis dataKey="dia" />
            <Tooltip
              formatter={(value: number, name: string) =>
                name === 'Valor médio' ? `R$ ${formatMoney(value, 2)}` : value
              }
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="py-2">
        <h2 className={'text-center text-lg dark:text-gray-100'}>Enlite</h2>
        <ResponsiveContainer
          width={width}
          height={height}
        >
          <LineChart
            data={list?.enlite}
            syncId="implante"
          >
            <Line
              type="monotone"
              yAxisId="right"
              dataKey="valor"
              stroke="#0d0"
              name="Valor médio"
            />
            <Line
              type="monotone"
              yAxisId="left"
              dataKey="quantidade"
              stroke="#58f"
              name="Quantidade"
            />
            <YAxis yAxisId="left" />
            <YAxis
              yAxisId="right"
              orientation="right"
            />
            <XAxis dataKey="dia" />
            <Tooltip
              formatter={(value: number, name: string) =>
                name === 'Valor médio' ? `R$ ${formatMoney(value, 2)}` : value
              }
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="py-2">
        <h2 className={'text-center text-lg dark:text-gray-100'}>Metil</h2>
        <ResponsiveContainer
          width={width}
          height={height}
        >
          <LineChart data={list?.metil}>
            <Line
              type="monotone"
              yAxisId="right"
              dataKey="valor"
              stroke="#0d0"
              name="Valor médio"
            />
            <Line
              type="monotone"
              yAxisId="left"
              dataKey="quantidade"
              stroke="#58f"
              name="Quantidade"
            />
            <YAxis yAxisId="left" />
            <YAxis
              yAxisId="right"
              orientation="right"
            />
            <XAxis dataKey="dia" />
            <Tooltip
              formatter={(value: number, name: string) =>
                name === 'Valor médio' ? `R$ ${formatMoney(value, 2)}` : value
              }
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="py-2">
        <h2 className={'text-center text-lg dark:text-gray-100'}>
          Corneal Ring
        </h2>
        <ResponsiveContainer
          width={width}
          height={height}
        >
          <LineChart data={list?.anel}>
            <Line
              type="monotone"
              yAxisId="right"
              dataKey="valor"
              stroke="#009900"
              name="Valor médio"
            />
            <Line
              type="monotone"
              yAxisId="left"
              dataKey="quantidade"
              stroke="#58f"
              name="Quantidade"
            />
            <YAxis yAxisId="left" />
            <YAxis
              yAxisId="right"
              orientation="right"
            />
            <XAxis dataKey="dia" />
            <Tooltip
              formatter={(value: number, name: string) =>
                name === 'Valor médio' ? `R$ ${formatMoney(value, 2)}` : value
              }
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="py-2">
        <h2 className={'text-center text-lg dark:text-gray-100'}>
          Liteflex + Enlite
        </h2>
        <ResponsiveContainer
          width={width}
          height={height}
        >
          <LineChart data={list?.enliteLiteflex}>
            <Line
              type="monotone"
              yAxisId="right"
              dataKey="valor"
              stroke="#0d0"
              name="Valor médio"
            />
            <Line
              type="monotone"
              yAxisId="left"
              dataKey="quantidade"
              stroke="#58f"
              name="Quantidade"
            />
            <YAxis yAxisId="left" />
            <YAxis
              yAxisId="right"
              orientation="right"
            />
            <XAxis dataKey="dia" />
            <Tooltip
              formatter={(value: number, name: string) =>
                name === 'Valor médio' ? `R$ ${formatMoney(value, 2)}` : value
              }
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}
