import { trpc } from "@/utils/trpc/trpc";
import React from "react";
import { Table } from "../../../components/table/table";
import { esterilizacaoExternaMensalSchema } from "./est-ext-mensal-schema";

type EsterilizacaoExternaMensalProp = {
  children?: React.ReactNode;
  mesCorrente: { mes?: string };
  mesInicial: { mes: string };
  onSelect?: (event: any) => void;
};

export function EsterilizacaoExternaMensal({
  mesInicial,
  mesCorrente,
  onSelect,
  children,
}: EsterilizacaoExternaMensalProp) {
  const dataMensal = trpc.esterilizacaoExterna.mensal.useQuery(mesInicial);

  return (
    <Table
      name="mensal"
      data={dataMensal.data}
      schema={esterilizacaoExternaMensalSchema}
      selected={mesCorrente}
      onSelect={onSelect}
    >
      {children}
    </Table>
  );
}
