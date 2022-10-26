import React from "react";
import { IEvent } from "../../../types";
import { Textbox } from "../../components/textbox/textbox";
import { inteiro, moeda } from "../../lib/text-box-formats";
import { PrecosVendedor } from "./precos-vendedor";
import { usePrecosState } from "./use-precos.state";

const produtos: {
  label: string;
  grupo: "hilite" | "liteflex" | "metil" | "enlite" | "disponivel";
}[] = [
  { grupo: "hilite", label: "HiLite" },
  { grupo: "liteflex", label: "LiteFlex" },
  { grupo: "metil", label: "Metil..." },
  { grupo: "enlite", label: "Enlite" },
];

function Produto({
  produto,
  recalc,
  snap,
}: {
  produto: any;
  snap: any;
  recalc: (args: IEvent) => void;
}) {
  return (
    <React.Fragment key={produto.grupo}>
      <tr className="border border-black">
        <td
          className={
            "px-3 py-2 text-xl font-bold text-left text-white bg-blue-900"
          }
        >
          {produto.label}
        </td>
        <td className="bg-blue-100">
          <Textbox
            className={
              "text-xl pr-1 w-32 font-bold text-right bg-blue-100 border-transparent"
            }
            value={inteiro.format(snap[produto.grupo].quantidade)}
            name={`${produto.grupo}.quantidade`}
            format={inteiro}
            onChange={recalc}
            autoComplete={"off"}
          />
        </td>
        <td className="bg-yellow-50">
          <Textbox
            onDoubleClick={() =>
              recalc({
                name: `${produto.grupo}.tabela`,
                value: moeda.format(snap[produto.grupo].precoPadrao),
                component: "Textbox",
                event: "onDoubleClick",
              })
            }
            className={
              "text-xl pr-1 w-40 text-right bg-yellow-50 border-transparent"
            }
            value={moeda.format(snap[produto.grupo].tabela)}
            name={`${produto.grupo}.tabela`}
            onChange={recalc}
            format={moeda}
            autoComplete={"off"}
          />
        </td>
        <td className="text-xl font-bold bg-yellow-400">
          <Textbox
            onDoubleClick={() =>
              recalc({
                name: `${produto.grupo}.ofertado`,
                value: moeda.format(snap[produto.grupo].precoMinimo),
                component: "Textbox",
                event: "onDoubleClick",
              })
            }
            className={
              "text-xl pr-1 w-40 font-bold text-right bg-yellow-400 border-transparent"
            }
            value={moeda.format(snap[produto.grupo].ofertado)}
            name={`${produto.grupo}.ofertado`}
            onChange={recalc}
            format={moeda}
            autoComplete={"off"}
          />
        </td>
      </tr>
      <tr>
        <td className="py-1" />
      </tr>
    </React.Fragment>
  );
}

export function PrecosCliente() {
  const [snap, setValue] = usePrecosState() as any;

  function recalc({ name, value }: IEvent) {
    const [group, item] = name.split(".");
    setValue(group, item, value);
  }

  return (
    <div className="flex flex-col">
      <div className="m-4">
        <p>
          <span className="text-2xl font-bold text-blue-600">Combos</span>
          {" >>> "}
          Lentes + Metilcelulose + Injetores
        </p>
        <p className={"text-lg font-bold"}>
          Descontos por quantidades e pacotes
        </p>
        <div className="p-4 my-2 bg-gray-200 border border-black w-min">
          <table className="text-right">
            <tbody>
              <tr>
                <td colSpan={2} className="py-1 pr-2">
                  Qt.
                </td>
                <td className="px-2">Tabela</td>
                <td className="px-2 font-bold">Ofertado</td>
                <td rowSpan={11} className="px-2"></td>
                <td
                  className="min-w-[150px] px-4 font-bold text-center align-top bg-white border-2 border-gray-400"
                  rowSpan={9}
                >
                  <p className="mt-1 mb-3 text-xl">Combo 1</p>
                  <p className="text-sm">
                    {snap.hilite.quantidade > 0
                      ? "HiLite"
                      : snap.liteflex.quantidade > 0
                      ? "LiteFlex"
                      : ""}
                  </p>
                  <p className="text-sm">{"+ Metil"}</p>
                  <p className="text-sm">{"+ Enlite"}</p>
                  <p className="mt-4 text-4xl text-blue-700">
                    {moeda.format(snap.combo1.tabela)}
                  </p>
                  <p className="mt-4 text-lg">x {snap.combo1.quantidade}</p>
                  <p className="mt-2 text-2xl text-blue-700">
                    {moeda.format(snap.combo1.totalTabela)}
                  </p>
                </td>
                <td rowSpan={9} className="px-2"></td>
                <td
                  className="min-w-[150px] px-4 font-bold text-center align-top bg-white border-2 border-gray-400 w-96"
                  rowSpan={9}
                >
                  <p className="mt-1 mb-3 text-xl">Combo 2</p>
                  <p className="text-sm">
                    {snap.hilite.quantidade > 0
                      ? "HiLite"
                      : snap.liteflex.quantidade > 0
                      ? "LiteFlex"
                      : ""}
                  </p>
                  <p className="text-sm">{"+ Enlite"}</p>
                  <p className="text-sm">
                    <br />
                  </p>
                  <p className="mt-4 text-4xl text-blue-700">
                    {moeda.format(snap.combo2.tabela)}
                  </p>
                  <p className="mt-4 text-lg">x {snap.combo2.quantidade}</p>
                  <p className="mt-2 text-2xl text-blue-700">
                    {moeda.format(snap.combo2.totalTabela)}
                  </p>
                </td>
              </tr>
              {produtos.map((produto) => (
                <Produto
                  key={produto.label}
                  produto={produto}
                  recalc={recalc}
                  snap={snap}
                />
              ))}

              <tr>
                <td colSpan={2} className="py-2 pr-2">
                  Totais
                </td>
                <td className="px-2 font-bold border border-black bg-yellow-50">
                  {moeda.format(snap.total.tabela)}
                </td>
                <td className="px-2 text-xl font-bold text-white bg-yellow-600 border border-black">
                  {moeda.format(snap.total.ofertado)}
                </td>
                <td
                  colSpan={3}
                  className="mt-2 text-2xl font-bold text-center text-blue-700 bg-white border-2 border-gray-400"
                >
                  {moeda.format(
                    snap.combo1.totalTabela + snap.combo2.totalTabela
                  )}
                </td>
              </tr>
              <tr>
                <td colSpan={3} className="py-2 pr-3">
                  Desconto
                  {" >"}
                </td>
                <td className="px-2 text-xl font-bold text-white line-through bg-gray-600 border border-black">
                  {moeda.format(snap.desconto.ofertado)}
                </td>
                <td
                  colSpan={3}
                  className="px-2 text-xl font-bold text-center text-white line-through bg-gray-600 border border-black"
                >
                  {moeda.format(
                    snap.total.tabela -
                      (snap.combo1.totalTabela + snap.combo2.totalTabela)
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="print:hidden">
        <div className="m-4">
          <div className="px-4 pb-4 my-2 bg-gray-300 border border-black w-min">
            <PrecosVendedor dados={snap} produtos={produtos} />
          </div>
        </div>
      </div>
    </div>
  );
}
