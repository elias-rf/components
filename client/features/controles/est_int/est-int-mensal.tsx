import { trpc } from "@/utils/trpc/trpc";
import React from "react";
import { Table } from "../../../components/search/table";
import { esterilizacaoInternaMensalSchema } from "./est-int-mensal-schema";

type EsterilizacaoInternaMensalProp = {
  children?: React.ReactNode;
  mesCorrente: { mes?: string };
  mesInicial: { mes: string };
  onSelect?: (event: any) => void;
};

export function EsterilizacaoInternaMensal({
  mesInicial,
  mesCorrente,
  onSelect,
  children,
}: EsterilizacaoInternaMensalProp) {
  const dataMensal = trpc.esterilizacaoInterna.mensal.useQuery(mesInicial);

  return (
    <Table
      name="mensal"
      data={dataMensal.data}
      schema={esterilizacaoInternaMensalSchema}
      selected={mesCorrente}
      onSelect={onSelect}
    >
      {children}
    </Table>
  );
}
