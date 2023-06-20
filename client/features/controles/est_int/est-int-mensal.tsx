import { Table } from "@/client/components/table";
import { TSelection } from "@/types";
import { trpc } from "@/utils/trpc/trpc";
import React from "react";
import { esterilizacaoInternaMensalSchema } from "./est-int-mensal_schema";

type EsterilizacaoInternaMensalProp = {
  children?: React.ReactNode;
  mesCorrente: { mes?: string }[];
  mesInicial: { mes: string };
  onSelection?: (event: TSelection) => void;
};

export function EsterilizacaoInternaMensal({
  mesInicial,
  mesCorrente,
  onSelection,
  children,
}: EsterilizacaoInternaMensalProp) {
  const dataMensal = trpc.esterilizacaoInterna.mensal.useQuery(mesInicial);

  return (
    <Table
      rows={dataMensal.data}
      columns={esterilizacaoInternaMensalSchema}
      selection={mesCorrente}
      onSelection={onSelection}
      getId={(rec: any) => ({
        mes: rec.mes,
      })}
    >
      {() => <>{children}</>}
    </Table>
  );
}
