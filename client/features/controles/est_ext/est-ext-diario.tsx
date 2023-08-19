import { Table } from "@/client/components/table";
import { TSelection } from "@/types";
import { day } from "@/utils/date/day";
import { trpc } from "@/rpc/utils/trpc";
import React from "react";
import { esterilizacaoExternaDiarioSchema } from "./est-ext-diario_schema";

type TEsterilizacaoExternaDiarioProp = {
  mesCorrente: { mes?: string }[];
  diaCorrente: { dia?: string }[];
  onSelection: (event: TSelection) => void;
  children?: React.ReactNode;
};

export function EsterilizacaoExternaDiario({
  mesCorrente,
  diaCorrente,
  onSelection,
  children,
}: TEsterilizacaoExternaDiarioProp) {
  const dataDiario = trpc.esterilizacaoExterna.diario.useQuery(
    {
      inicio: day(mesCorrente[0].mes + "-01")
        .startOf("month")
        .format("YYYY-MM-DD"),
      fim: day(mesCorrente[0].mes + "-01")
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
      columns={esterilizacaoExternaDiarioSchema}
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
