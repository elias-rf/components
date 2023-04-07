import React from "react";
import { day } from "../../../../utils/date/day";
import { trpc } from "../../../../utils/trpc/trpc";
import { Table } from "../../../components/table/table";
import { esterilizacaoInternaDiarioSchema } from "./est-int-diario-schema";

type EsterilizacaoInternaDiarioProps = {
  children?: React.ReactNode;
  mesCorrente: { mes?: string };
  diaCorrente: { dia?: string };
  onSelect: (event: any) => void;
};

export function EsterilizacaoInternaDiario({
  children,
  mesCorrente,
  diaCorrente,
  onSelect,
}: EsterilizacaoInternaDiarioProps) {
  const dataDiario = trpc.esterilizacaoInterna.diario.useQuery({
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
      schema={esterilizacaoInternaDiarioSchema}
      selected={diaCorrente}
      onSelect={onSelect}
    >
      {children}
    </Table>
  );
}
