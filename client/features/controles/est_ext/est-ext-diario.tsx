import { day } from "@mono/utils/date/day";
import { trpc } from "@mono/utils/trpc/trpc";
import React from "react";
import { Table } from "../../../components/table/table";

type EsterilizacaoExternaDiarioProp = {
  children?: React.ReactNode;
  mesCorrente: { mes?: string };
  diaCorrente: { dia?: string };
  onSelect: (event: any) => void;
};

const schema: any = [{}];

export function EsterilizacaoExternaDiario({
  children,
  mesCorrente,
  diaCorrente,
  onSelect,
}: EsterilizacaoExternaDiarioProp) {
  const dataDiario = trpc.esterilizacaoExterna.diario.useQuery({
    inicio: day(mesCorrente.mes + "-01")
      .startOf("month")
      .format("YYYY-MM-DD"),
    fim: day(mesCorrente.mes + "-01")
      .endOf("month")
      .format("YYYY-MM-DD"),
  });

  return (
    <Table
      name="diario"
      data={dataDiario.data}
      schema={schema}
      selected={diaCorrente}
      onSelect={onSelect}
    >
      {children}
    </Table>
  );
}
