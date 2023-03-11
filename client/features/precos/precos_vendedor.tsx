import React from "react";

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

interface Tablela2Props {
  dados: {
    [prop: string]: Items;
  }[];
  produtos: {
    label: string;
    grupo: "hilite" | "liteflex" | "metil" | "enlite" | "disponivel";
  }[];
}

export function PrecosVendedor({ dados, produtos }: Tablela2Props) {
  return (
    <table className={"text-right table-auto"}>
      <tbody>
        <tr>
          <td></td>
          <td className={"w-24 px-4 py-2"}>Preço padrão</td>
          <td className={"w-24 px-4 py-2"}>Preço sugerido</td>
          <td className={"w-24 px-4 py-2"}>Preço Mínimo</td>
          <td className={"w-24 px-4 py-2"}>Saldo produto</td>
        </tr>
        {produtos.map((prod) => (
          <React.Fragment key={prod.grupo}>
            <tr className={"border border-black"}>
              <td className={"px-4 py-2 text-left text-white bg-blue-900"}>
                {prod.label}
              </td>
              <td className={"px-4 bg-yellow-200"}>
                {br.format(dados[prod.grupo].precoPadrao)}
              </td>
              <td className={"px-4 bg-yellow-100"}>
                {br.format(dados[prod.grupo].precoSugerido)}
              </td>
              <td className={"px-4 bg-yellow-100"}>
                {br.format(dados[prod.grupo].precoMinimo)}
              </td>
              <td
                className={
                  ("px-4 font-bold bg-white",
                  dados[prod.grupo].saldoProduto < 0
                    ? "bg-red-100 text-red-600"
                    : null)
                }
              >
                {br.format(dados[prod.grupo].saldoProduto)}
              </td>
            </tr>
            <tr>
              <td className={"py-1"} />
            </tr>
          </React.Fragment>
        ))}
        <tr>
          <td
            colSpan={4}
            className={"py-2 pr-4"}
          >
            Disponível
            {" >"}
          </td>
          <td
            className={
              ("px-4 py-2 font-bold border border-black",
              dados.disponivel.saldoCombo < 0
                ? "bg-red-100 text-red-600"
                : "text-black bg-blue-100")
            }
          >
            {br.format(dados.disponivel.saldoCombo)}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
