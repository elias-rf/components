import Datatable, { tableActionTypes } from "@/features/ui/table/table";
import day from "@/lib/day";
import React from "react";
import { useQuery } from "react-query";
import { Action } from "../../..";
import EstIntService from "../../service/esterilizacao-interna.service";

export default function EstInt() {
  const estIntSvc = EstIntService();

  const [mesCorrente, setMesCorrente] = React.useState([]);
  const [diaCorrente, setDiaCorrente] = React.useState([]);
  const [produtoCorrente, setProdutoCorrente] = React.useState([]);

  const mensalSchema = estIntSvc.schemaMensal();
  const diariaSchema = estIntSvc.schemaDiario();
  const produtoSchema = estIntSvc.schemaProduto();
  const modeloSchema = estIntSvc.schemaModelo();

  const mesInicial = day().subtract(13, "month").format("YYYY-MM");

  const mensalData = useQuery(
    ["esterilizacaoInternaMensal", mesInicial],
    ({ queryKey }) => {
      const [_key, mesInicial] = queryKey as [string, string];
      return estIntSvc.mensal(mesInicial);
    },
    {
      staleTime: 1000 * 60 - 10, // 10 minutos
    }
  );

  const diariaData = useQuery(
    ["esterilizacaoInternaDiaria", mesCorrente],
    ({ queryKey }) => {
      const [_key, [mesCorrente]] = queryKey as [string, string];
      if (mesCorrente === undefined) return [];
      return estIntSvc.diario(
        day(mesCorrente + "-01")
          .startOf("month")
          .format("YYYY-MM-DD"),
        day(mesCorrente + "-01")
          .endOf("month")
          .format("YYYY-MM-DD")
      );
    },
    {
      staleTime: 1000 * 60 * 10, // 10 minutos
    }
  );

  const produtoData = useQuery(
    ["esterilizacaoInternaProduto", diaCorrente],
    ({ queryKey }) => {
      const [_key, [diaCorrente]] = queryKey as [string, string];
      if (diaCorrente === undefined) return [];
      return estIntSvc.produto(diaCorrente);
    },
    {
      staleTime: 1000 * 60 - 10, // 10 minutos
    }
  );

  const modeloData = useQuery(
    ["esterilizacaoInternaModelo", [diaCorrente, produtoCorrente]],
    ({ queryKey }) => {
      const [_key, [[diaCorrente], [produtoCorrente]]] = queryKey as [
        string,
        string
      ];
      if (diaCorrente === undefined || produtoCorrente === undefined) return [];
      return estIntSvc.modelo(diaCorrente, produtoCorrente);
    },
    {
      staleTime: 1000 * 60 - 10, // 10 minutos
    }
  );

  function handleDispatchMensal(action: Action) {
    switch (action.type) {
      case tableActionTypes.select:
        setMesCorrente(action.payload);
        break;
    }
  }
  function handleDispatchDiario(action: Action) {
    switch (action.type) {
      case tableActionTypes.select:
        setDiaCorrente(action.payload);
        break;
    }
  }

  function handleDispatchProduto(action: Action) {
    switch (action.type) {
      case tableActionTypes.select:
        setProdutoCorrente(action.payload);
        break;
    }
  }

  return (
    <div className="flex">
      <div className="p-2">
        <Datatable
          data={mensalData.data || []}
          schema={mensalSchema}
          selected={mesCorrente}
          dispatch={handleDispatchMensal}
        >
          <Datatable
            data={diariaData.data || []}
            schema={diariaSchema}
            selected={diaCorrente}
            dispatch={handleDispatchDiario}
          >
            <Datatable
              data={produtoData.data || []}
              schema={produtoSchema}
              selected={produtoCorrente}
              dispatch={handleDispatchProduto}
            >
              <Datatable
                data={modeloData.data || []}
                schema={modeloSchema}
              ></Datatable>
            </Datatable>
          </Datatable>
        </Datatable>
      </div>
    </div>
  );
}
