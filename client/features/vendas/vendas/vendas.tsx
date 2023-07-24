import { Table } from "@/client/components/table";
import { day } from "@/utils/date/day";
import React from "react";
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
          rows={mensal(dataVendaAnalitico)}
          selected={mesCorrente}
          onSelected={handleMensal}
          columns={mesSchema}
        >
          <Table
            rows={mensalProduto(mesCorrente, dataVendaAnalitico)}
            onSelected={handleProduto}
            columns={produtoSchema}
          ></Table>
          <Table
            rows={mensalVendedor(mesCorrente, dataVendaAnalitico)}
            selected={vendedorCorrente}
            onSelected={handleVendedor}
            columns={vendedorSchema}
          >
            <Table
              rows={mensalVendedorProduto(
                mesCorrente,
                vendedorCorrente,
                dataVendaAnalitico
              )}
              selected={produtoCorrente}
              onSelected={handleProduto}
              columns={produtoSchema}
            ></Table>
            <Table
              rows={mensalVendedorUf(
                mesCorrente,
                vendedorCorrente,
                dataVendaAnalitico
              )}
              onSelected={handleUf}
              columns={ufSchema}
            ></Table>
          </Table>
        </Table>
      </div>
    </div>
  );
}
