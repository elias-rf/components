import { useQuery } from "@tanstack/react-query";
import React from "react";
import { TEvent, TIds } from "../../../../types";
import { Table } from "../../../components/table/table";
import { operacaoService } from "../../../service/operacao.service";

type OperacaoMensalProps = {
  operacao: TIds;
  mesInicial: TIds;
  mesCorrente: TIds;
  children?: React.ReactNode;
  onSelectEvent?: (event: TEvent) => void;
};

export function OperacaoMensal({
  operacao,
  mesInicial,
  mesCorrente,
  children,
  onSelectEvent,
}: OperacaoMensalProps) {
  const schema = useQuery({
    queryKey: ["operacaoMensal", "schema"],
    queryFn: operacaoService.schemaMensal,
    staleTime: Infinity,
  });

  const mensal = useQuery({
    queryKey: ["operacaoMensal", "get", operacao, mesInicial],
    queryFn: ({ queryKey }) => {
      const [_key1, _key2, operacao, mesInicial] = queryKey as [
        string,
        string,
        TIds,
        TIds
      ];
      return operacaoService.mensal(operacao.operacao, mesInicial.mes);
    },
    staleTime: 1000 * 60 - 10, // 10 minutos
  });

  return (
    <Table
      name="mensal"
      data={mensal.data || []}
      schema={schema.data || []}
      selected={mesCorrente}
      onSelectEvent={onSelectEvent}
    >
      {children}
    </Table>
  );
}
