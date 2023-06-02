import { TIds } from "@/types";
import { trpc } from "@/utils/trpc/trpc";
import React from "react";
import { Table } from "../../../components/search/table";
import { operacaoMensalSchema } from "./operacao-mensal.schema";

type OperacaoMensalProps = {
  operacao: TIds;
  mesInicial: TIds;
  mesCorrente: TIds;
  children?: React.ReactNode;
  onSelect?: (event: any) => void;
};

export function OperacaoMensal({
  operacao,
  mesInicial,
  mesCorrente,
  children,
  onSelect,
}: OperacaoMensalProps) {
  const mensal = trpc.ordemProducaoOperacao.mensal.useQuery({
    operacao: operacao.operacao,
    mes: mesInicial.mes,
  });

  return (
    <Table
      name="mensal"
      data={mensal.data}
      schema={operacaoMensalSchema}
      selected={mesCorrente}
      onSelect={onSelect}
    >
      {children}
    </Table>
  );
}
