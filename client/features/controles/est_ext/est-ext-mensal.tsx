import { Table } from "@/client/components/table";
import { TSelection } from "@/types";
import { trpc } from "@/utils/trpc/trpc";
import React from "react";
import { esterilizacaoExternaMensalSchema } from "./est-ext-mensal_schema";

type EsterilizacaoExternaMensalProp = {
  children?: React.ReactNode;
  mesCorrente: { mes?: string }[];
  mesInicial: { mes: string };
  onSelection?: (event: TSelection) => void;
};

export function EsterilizacaoExternaMensal({
  mesInicial,
  mesCorrente,
  onSelection,
  children,
}: EsterilizacaoExternaMensalProp) {
  const dataMensal = trpc.esterilizacaoExterna.mensal.useQuery(mesInicial);
  return (
    <Table
      rows={dataMensal.data || []}
      columns={esterilizacaoExternaMensalSchema}
      selection={mesCorrente || []}
      onSelection={onSelection}
      getId={(rec: any) => ({
        mes: rec.mes,
      })}
    >
      {() => <>{children}</>}
    </Table>
  );
}
