import { TIds } from "@/types";
import { day } from "@/utils/date/day";
import { trpc } from "@/utils/trpc/trpc";
import React from "react";
import { Table } from "../../../components/table/table";
import { operacaoDiarioSchema } from "./operacao-diario.schema";

type OperacaoDiarioProp = {
  operacao: TIds;
  mes: TIds;
  diaCorrente: TIds;
  children?: React.ReactNode;
  onSelect?: (event: any) => void;
};

export function OperacaoDiario({
  operacao,
  mes,
  diaCorrente,
  children,
  onSelect,
}: OperacaoDiarioProp) {
  const diario = trpc.ordemProducaoOperacao.diario.useQuery({
    operacao: operacao.operacao,
    inicio: day(mes.mes + "-01")
      .startOf("month")
      .format("YYYY-MM-DD"),
    fim: day(mes.mes + "-01")
      .endOf("month")
      .format("YYYY-MM-DD"),
  });

  return (
    <Table
      name="diario"
      data={diario.data}
      schema={operacaoDiarioSchema}
      selected={diaCorrente}
      onSelect={onSelect}
    >
      {children}
    </Table>
  );
}
