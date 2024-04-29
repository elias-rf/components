import { formatMoney } from '@/utils/format/format-money.mjs'
import { useQuery } from '@tanstack/react-query'
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

/**
 * Componente para manipular Agenda de Ramais
 *
 * @returns {*} componente react
 */
export function Vendas30dias({ store }) {
  const inicio = store.state.use.inicio()
  const fim = store.state.use.fim()
  const query = useQuery({
    queryKey: ['vendas-30dias', { inicio, fim }],
    queryFn: () => store.fetchList({ inicio, fim }),
  })

  const width = '100%'
  const height = 300

  return (
    <>
      <div className="py-2">
        <h2 className={'text-center text-lg dark:text-gray-100'}>Liteflex</h2>
        <ResponsiveContainer
          width={width}
          height={height}
        >
          <LineChart
            data={query.data?.liteflex}
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
              formatter={(value, name) =>
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
          <LineChart data={query.data?.hilite}>
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
              formatter={(value, name) =>
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
            data={query.data?.enlite}
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
              formatter={(value, name) =>
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
          <LineChart data={query.data?.metil}>
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
              formatter={(value, name) =>
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
          <LineChart data={query.data?.anel}>
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
              formatter={(value, name) =>
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
          <LineChart data={query.data?.enliteLiteflex}>
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
              formatter={(value, name) =>
                name === 'Valor médio' ? `R$ ${formatMoney(value, 2)}` : value
              }
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}
