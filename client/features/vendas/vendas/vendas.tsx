import React from "react";
import { day } from "../../../../utils/date/day";
import { Table } from "../../../components/table/table";
import vendaService from "../../../service/venda.service";
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
  const [mesCorrente, setMesCorrente] = React.useState([]);
  const [produtoCorrente, setProdutoCorrente] = React.useState([]);
  const [vendedorCorrente, setVendedorCorrente] = React.useState([]);
  const [_ufCorrente, setUfCorrente] = React.useState([]);

  const diaInicial = day()
    .subtract(13, "month")
    .startOf("month")
    .format("YYYY-MM-DD");
  const diaFinal = day().format("YYYY-MM-DD");

  const venda = useQuery(
    ["vendaAnalitico", [diaInicial, diaFinal]],
    ({ queryKey }) => {
      const [_key, [diaInicial, diaFinal]] = queryKey as [string, string[]];
      return vendaService.analitico(diaInicial, diaFinal);
    },
    {
      staleTime: 1000 * 60 - 60, // 60 minutos
    }
  );

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
    <div className="flex">
      <div className="p-2">
        <Table
          data={mensal(venda.data)}
          selected={mesCorrente}
          dispatch={handleMensal}
          schema={mesSchema}
        >
          <Table
            data={mensalProduto(mesCorrente, venda.data)}
            dispatch={handleProduto}
            schema={produtoSchema}
          ></Table>
          <Table
            data={mensalVendedor(mesCorrente, venda.data)}
            selected={vendedorCorrente}
            dispatch={handleVendedor}
            schema={vendedorSchema}
          >
            <Table
              data={mensalVendedorProduto(
                mesCorrente,
                vendedorCorrente,
                venda.data
              )}
              selected={produtoCorrente}
              dispatch={handleProduto}
              schema={produtoSchema}
            ></Table>
            <Table
              data={mensalVendedorUf(mesCorrente, vendedorCorrente, venda.data)}
              dispatch={handleUf}
              schema={ufSchema}
            ></Table>
          </Table>
        </Table>
      </div>
    </div>
  );
}
