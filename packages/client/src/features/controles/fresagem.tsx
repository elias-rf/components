import Datatable, { tableActionTypes } from "@/features/ui/table/table";
import day from "@/lib/day";
import React from "react";
import { useQuery } from "react-query";
import { Action } from "../../..";
import OperacaoService from "../../service/operacao.service";

export default function Operacao() {
  const operacaoSvc = OperacaoService();

  const [mesCorrente, setMesCorrente] = React.useState([]);
  const [diaCorrente, setDiaCorrente] = React.useState([]);
  const [produtoCorrente, setProdutoCorrente] = React.useState([]);
  const operacaoCorrente = "2018";

  const mensalSchema = operacaoSvc.schemaMensal();
  const diariaSchema = operacaoSvc.schemaDiario();
  const modeloSchema = operacaoSvc.schemaModelo();
  const produtoSchema = operacaoSvc.schemaProduto();
  const turnoSchema = operacaoSvc.schemaTurno();

  const mesInicial = day().subtract(13, "month").format("YYYY-MM");

  const mensalData = useQuery(
    ["operacaoMensal", [operacaoCorrente, mesInicial]],
    ({ queryKey }) => {
      const [_key, [operacaoCorrente, mesInicial]] = queryKey as [
        string,
        string[]
      ];
      return operacaoSvc.mensal(operacaoCorrente, mesInicial);
    },
    {
      staleTime: 1000 * 60 - 10, // 10 minutos
    }
  );

  const diariaData = useQuery(
    ["operacaoDiaria", [operacaoCorrente, mesCorrente]],
    ({ queryKey }) => {
      const [_key, [operacaoCorrente, mesCorrente]] = queryKey as [
        string,
        string
      ];
      if (operacaoCorrente === undefined || mesCorrente === undefined)
        return [];
      return operacaoSvc.diario(
        operacaoCorrente,
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
    ["operacaoProduto", [operacaoCorrente, diaCorrente]],
    ({ queryKey }) => {
      const [_key, [operacaoCorrente, [diaCorrente]]] = queryKey as [
        string,
        string
      ];
      if (operacaoCorrente === undefined || diaCorrente === undefined)
        return [];
      return operacaoSvc.produto(operacaoCorrente, diaCorrente);
    },
    {
      staleTime: 1000 * 60 * 10, // 10 minutos
    }
  );

  const modeloData = useQuery(
    ["operacaoModelo", [operacaoCorrente, diaCorrente, produtoCorrente]],
    ({ queryKey }) => {
      const [_key, [operacaoCorrente, [diaCorrente], [produtoCorrente]]] =
        queryKey as [string, string];
      if (
        operacaoCorrente === undefined ||
        diaCorrente === undefined ||
        produtoCorrente === undefined
      )
        return [];
      return operacaoSvc.modelo(operacaoCorrente, diaCorrente, produtoCorrente);
    },
    {
      staleTime: 1000 * 60 * 10, // 10 minutos
    }
  );

  const turnoData = useQuery(
    ["operacaoTurno", [operacaoCorrente, diaCorrente]],
    ({ queryKey }) => {
      const [_key, [operacaoCorrente, [diaCorrente]]] = queryKey as [
        string,
        string
      ];
      if (operacaoCorrente === undefined || diaCorrente === undefined)
        return [];
      return operacaoSvc.turno(operacaoCorrente, diaCorrente);
    },
    {
      staleTime: 1000 * 60 * 10, // 10 minutos
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
            <Datatable
              data={turnoData.data || []}
              schema={turnoSchema}
            ></Datatable>
          </Datatable>
        </Datatable>
      </div>
    </div>
  );
}
