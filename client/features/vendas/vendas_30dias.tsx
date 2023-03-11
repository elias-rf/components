import React from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { nfSaidaStore } from "../../../model/nf-saida/nf-saida.store";
import { day } from "../../../utils/date/day";
import { formatMoney } from "../../../utils/format/format-money";

/**
 * Componente para manipular Agenda de Ramais
 *
 * @returns {*} componente react
 */
export function Vendas30dias() {
  const [dataVendaDiario, getVendaDiario] = nfSaidaStore((state) => [
    state.dataVendaDiario,
    state.getVendaDiario,
  ]);
  const width = "100%";
  const height = 300;

  React.useEffect(() => {
    const fim = day().format("YYYY-MM-DD");
    const inicio = day().subtract(90, "days").format("YYYY-MM-DD");
    getVendaDiario({
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
    });
  }, []);

  return (
    <>
      <div className={"py-2"}>
        <h2 className={"text-lg text-center"}>Liteflex</h2>
        <ResponsiveContainer
          width={width}
          height={height}
        >
          <LineChart
            data={dataVendaDiario?.liteflex}
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
        <h2 className={"text-lg text-center"}>Hilite</h2>
        <ResponsiveContainer
          width={width}
          height={height}
        >
          <LineChart data={dataVendaDiario?.hilite}>
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
        <h2 className={"text-lg text-center"}>Enlite</h2>
        <ResponsiveContainer
          width={width}
          height={height}
        >
          <LineChart
            data={dataVendaDiario?.enlite}
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
        <h2 className={"text-lg text-center"}>Metil</h2>
        <ResponsiveContainer
          width={width}
          height={height}
        >
          <LineChart data={dataVendaDiario?.metil}>
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
        <h2 className={"text-lg text-center"}>Corneal Ring</h2>
        <ResponsiveContainer
          width={width}
          height={height}
        >
          <LineChart data={dataVendaDiario?.anel}>
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
        <h2 className={"text-lg text-center"}>Liteflex + Enlite</h2>
        <ResponsiveContainer
          width={width}
          height={height}
        >
          <LineChart data={dataVendaDiario?.enliteLiteflex}>
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
