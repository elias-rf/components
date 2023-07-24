import { day } from "@/utils/date/day";
import { formatMoney } from "@/utils/format/format-money";
import { trpc } from "@/utils/trpc/trpc";
import { Typography } from "@mui/material";
import React from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatDiario } from "./format-diario";

type Vendas30diasProp = {
  dia?: string;
  onState?: (event: any) => void;
};

/**
 * Componente para manipular Agenda de Ramais
 *
 * @returns {*} componente react
 */
export function Vendas30dias({ onState, dia }: Vendas30diasProp) {
  const fim = day(dia).format("YYYY-MM-DD");

  const inicio = day(dia).subtract(90, "days").format("YYYY-MM-DD");

  const dataVendaDiario = trpc.nfSaida.vendaDiario.useQuery(
    {
      inicio,
      fim,
      uf: [
        "AC",
        "AL",
        "AM",
        "AP",
        "BA",
        "CE",
        "DF",
        "ES",
        "GO",
        "MA",
        "MG",
        "MS",
        "MT",
        "PA",
        "PB",
        "PE",
        "PI",
        "PR",
        "RJ",
        "RN",
        "RO",
        "RR",
        "RS",
        "SC",
        "SE",
        "SP1",
        "SP2",
        "TO",
        "EX",
        "FV",
      ],
    },
    { select: (data) => formatDiario(data, fim) }
  );
  const width = "100%";
  const height = 300;

  React.useEffect(() => {
    onState && onState({ inicio, fim, data: dataVendaDiario.data });
  }, [onState, inicio, fim, dataVendaDiario.data]);

  return (
    <>
      <Typography variant="h5">Vendas 30 dias</Typography>
      <div className={"py-2"}>
        <h2 className={"text-center text-lg"}>Liteflex</h2>
        <ResponsiveContainer
          width={width}
          height={height}
        >
          <LineChart
            data={dataVendaDiario.data?.liteflex}
            syncId="implante"
          >
            <Line
              type="monotone"
              yAxisId="right"
              dataKey="valor"
              stroke="#008800"
              name="Valor médio"
            />
            <Line
              type="monotone"
              yAxisId="left"
              dataKey="quantidade"
              stroke="#0000ff"
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
                name === "Valor médio"
                  ? `R$ ${formatMoney(value, 2)}`
                  : value.toString()
              }
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className={"py-2"}>
        <h2 className={"text-center text-lg"}>Hilite</h2>
        <ResponsiveContainer
          width={width}
          height={height}
        >
          <LineChart data={dataVendaDiario.data?.hilite}>
            <Line
              type="monotone"
              yAxisId="right"
              dataKey="valor"
              stroke="#008800"
              name="Valor médio"
            />
            <Line
              type="monotone"
              yAxisId="left"
              dataKey="quantidade"
              stroke="#0000ff"
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
                name === "Valor médio" ? `R$ ${formatMoney(value, 2)}` : value
              }
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className={"py-2"}>
        <h2 className={"text-center text-lg"}>Enlite</h2>
        <ResponsiveContainer
          width={width}
          height={height}
        >
          <LineChart
            data={dataVendaDiario.data?.enlite}
            syncId="implante"
          >
            <Line
              type="monotone"
              yAxisId="right"
              dataKey="valor"
              stroke="#008800"
              name="Valor médio"
            />
            <Line
              type="monotone"
              yAxisId="left"
              dataKey="quantidade"
              stroke="#0000ff"
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
                name === "Valor médio" ? `R$ ${formatMoney(value, 2)}` : value
              }
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className={"py-2"}>
        <h2 className={"text-center text-lg"}>Metil</h2>
        <ResponsiveContainer
          width={width}
          height={height}
        >
          <LineChart data={dataVendaDiario.data?.metil}>
            <Line
              type="monotone"
              yAxisId="right"
              dataKey="valor"
              stroke="#008800"
              name="Valor médio"
            />
            <Line
              type="monotone"
              yAxisId="left"
              dataKey="quantidade"
              stroke="#0000ff"
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
                name === "Valor médio" ? `R$ ${formatMoney(value, 2)}` : value
              }
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className={"py-2"}>
        <h2 className={"text-center text-lg"}>Corneal Ring</h2>
        <ResponsiveContainer
          width={width}
          height={height}
        >
          <LineChart data={dataVendaDiario.data?.anel}>
            <Line
              type="monotone"
              yAxisId="right"
              dataKey="valor"
              stroke="#008800"
              name="Valor médio"
            />
            <Line
              type="monotone"
              yAxisId="left"
              dataKey="quantidade"
              stroke="#0000ff"
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
                name === "Valor médio" ? `R$ ${formatMoney(value, 2)}` : value
              }
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className={"py-2"}>
        <h2 className={"text-center text-lg"}>Liteflex + Enlite</h2>
        <ResponsiveContainer
          width={width}
          height={height}
        >
          <LineChart data={dataVendaDiario.data?.enliteLiteflex}>
            <Line
              type="monotone"
              yAxisId="right"
              dataKey="valor"
              stroke="#008800"
              name="Valor médio"
            />
            <Line
              type="monotone"
              yAxisId="left"
              dataKey="quantidade"
              stroke="#0000ff"
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
                name === "Valor médio" ? `R$ ${formatMoney(value, 2)}` : value
              }
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
