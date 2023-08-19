import { Table } from "@/client/components/table";
import { TSelection } from "@/types";
import { day } from "@/utils/date/day";
import { trpc } from "@/rpc/utils/trpc";
import React from "react";
import { esterilizacaoInternaDiarioSchema } from "./est-int-diario_schema";

type EsterilizacaoInternaDiarioProps = {
  mesCorrente: { mes?: string }[];
  diaCorrente: { dia?: string }[];
  onSelection: (event: TSelection) => void;
  children?: React.ReactNode;
};

export function EsterilizacaoInternaDiario({
  mesCorrente,
  diaCorrente,
  onSelection,
  children,
}: EsterilizacaoInternaDiarioProps) {
  const dataDiario = trpc.esterilizacaoInterna.diario.useQuery(
    {
      inicio: day(mesCorrente[0]?.mes + "-01")
        .startOf("month")
        .format("YYYY-MM-DD"),
      fim: day(mesCorrente[0]?.mes + "-01")
        .endOf("month")
        .format("YYYY-MM-DD"),
    },
    {
      enabled: mesCorrente.length > 0,
    }
  );

  return (
    <Table
      rows={dataDiario.data || []}
      columns={esterilizacaoInternaDiarioSchema}
      selection={diaCorrente || []}
      onSelection={onSelection}
      getId={(rec: any) => ({
        dia: rec.dia,
      })}
    >
      {() => <>{children}</>}
    </Table>
  );
}
