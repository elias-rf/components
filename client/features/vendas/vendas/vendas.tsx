import { nfSaidaStore } from "@/models/nf-saida/nf-saida.store";
import { day } from "@/utils/date/day";
import React from "react";
import { Table } from "../../../components/table/table";
import {
  mensal,
  mensalProduto,
  mensalVendedor,
  mensalVendedorProduto,
  mensalVendedorUf,
  mesSchema,
  produtoSchema,
  ufSchema,
  vendedorSchema,
} from "./venda";

const nfSaidaStore = nfSaidaStore();

export function Vendas() {
  const getVendaAnalitico = nfSaidaStore((state) => state.getVendaAnalitico);
  const dataVendaAnalitico = nfSaidaStore((state) => state.dataVendaAnalitico);
  const [mesCorrente, setMesCorrente] = React.useState([]);
  const [produtoCorrente, setProdutoCorrente] = React.useState([]);
  const [vendedorCorrente, setVendedorCorrente] = React.useState([]);
  const [_ufCorrente, setUfCorrente] = React.useState([]);

  const diaInicial = day()
    .subtract(13, "month")
    .startOf("month")
    .format("YYYY-MM-DD");
  const diaFinal = day().format("YYYY-MM-DD");

  React.useEffect(() => {
    getVendaAnalitico({ inicio: diaInicial, fim: diaFinal });
  }, [diaInicial, diaFinal]);

  function handleMensal(action: any) {
    setMesCorrente(action.payload);
  }
  function handleProduto(action: any) {
    setProdutoCorrente(action.payload);
  }
  function handleVendedor(action: any) {
    setVendedorCorrente(action.payload);
  }
  function handleUf(action: any) {
    setUfCorrente(action.payload);
  }

  return (
    <div className={"flex"}>
      <div className={"p-2"}>
        <Table
          data={mensal(dataVendaAnalitico)}
          selected={mesCorrente}
          dispatch={handleMensal}
          schema={mesSchema}
        >
          <Table
            data={mensalProduto(mesCorrente, dataVendaAnalitico)}
            dispatch={handleProduto}
            schema={produtoSchema}
          ></Table>
          <Table
            data={mensalVendedor(mesCorrente, dataVendaAnalitico)}
            selected={vendedorCorrente}
            dispatch={handleVendedor}
            schema={vendedorSchema}
          >
            <Table
              data={mensalVendedorProduto(
                mesCorrente,
                vendedorCorrente,
                dataVendaAnalitico
              )}
              selected={produtoCorrente}
              dispatch={handleProduto}
              schema={produtoSchema}
            ></Table>
            <Table
              data={mensalVendedorUf(
                mesCorrente,
                vendedorCorrente,
                dataVendaAnalitico
              )}
              dispatch={handleUf}
              schema={ufSchema}
            ></Table>
          </Table>
        </Table>
      </div>
    </div>
  );
}
