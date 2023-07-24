import React from "react";
import { twMerge } from "tailwind-merge";

const br = new Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

interface Items {
  precoPadrao: number;
  precoSugerido: number;
  precoMinimo: number;
  saldoProduto: number;
  saldoCombo: number;
}

export type TGrupos =
  | "hilite"
  | "liteflex"
  | "metil"
  | "enlite"
  | "disponivel"
  | "combo1"
  | "combo2"
  | "total"
  | "desconto";

interface Tablela2Props {
  dados: { [key in TGrupos]: Items }[];
  produtos: {
    label: string;
    grupo: TGrupos;
  }[];
}

export function PrecosVendedor({ dados, produtos }: Tablela2Props) {
  return (
    <table className="table-auto text-right">
      <tbody>
        <tr>
          <td></td>
          <td className="w-24 px-4 py-2">Preço padrão</td>
          <td className="w-24 px-4 py-2">Preço sugerido</td>
          <td className="w-24 px-4 py-2">Preço Mínimo</td>
          <td className="w-24 px-4 py-2">Saldo produto</td>
        </tr>
        {produtos.map((prod) => (
          <React.Fragment key={prod.grupo}>
            <tr className="border border-black">
              <td className="bg-blue-900 px-4 py-2 text-left text-white">
                {prod.label}
              </td>
              <td className="bg-yellow-200 px-4">
                {br.format(dados[prod.grupo].precoPadrao)}
              </td>
              <td className="bg-yellow-100 px-4">
                {br.format(dados[prod.grupo].precoSugerido)}
              </td>
              <td className="bg-yellow-100 px-4">
                {br.format(dados[prod.grupo].precoMinimo)}
              </td>
              <td
                className={twMerge(
                  "bg-white px-4 font-bold",
                  dados[prod.grupo].saldoProduto < 0
                    ? "bg-red-100 text-red-600"
                    : null
                )}
              >
                {br.format(dados[prod.grupo].saldoProduto)}
              </td>
            </tr>
            <tr>
              <td className="py-1" />
            </tr>
          </React.Fragment>
        ))}
        <tr>
          <td
            colSpan={4}
            className="py-2 pr-4"
          >
            Disponível
            {" >"}
          </td>
          <td
            className={twMerge(
              "border border-black px-4 py-2 font-bold",
              dados.disponivel.saldoCombo < 0
                ? "bg-red-100 text-red-600"
                : "bg-blue-100 text-black"
            )}
          >
            {br.format(dados.disponivel.saldoCombo)}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
