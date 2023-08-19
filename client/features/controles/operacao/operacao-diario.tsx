import { Table } from "@/client/components/table";
import { TSelection } from "@/types";
import { day } from "@/utils/date/day";
import { trpc } from "@/rpc/utils/trpc";
import React from "react";
import { operacaoDiarioSchema } from "./operacao-diario_schema";

type OperacaoDiarioProp = {
  operacao: { operacao?: string };
  mes: { mes?: string }[];
  diaCorrente: { dia?: string }[];
  onSelection?: (event: TSelection) => void;
  children?: React.ReactNode;
};

export function OperacaoDiario({
  operacao,
  mes,
  diaCorrente,
  children,
  onSelection,
}: OperacaoDiarioProp) {
  const diario = trpc.ordemProducaoOperacao.diario.useQuery({
    operacao: operacao.operacao || "",
    inicio: day(mes[0].mes + "-01")
      .startOf("month")
      .format("YYYY-MM-DD"),
    fim: day(mes[0].mes + "-01")
      .endOf("month")
      .format("YYYY-MM-DD"),
  });

  return (
    <Table
      rows={diario.data || []}
      columns={operacaoDiarioSchema}
      selection={diaCorrente}
      onSelection={onSelection}
      getId={(rec: any) => ({
        dia: rec.dia,
      })}
    >
      {() => <>{children}</>}
    </Table>
  );
}
