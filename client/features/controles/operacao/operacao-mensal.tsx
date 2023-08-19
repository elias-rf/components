import { Table } from "@/client/components/table";
import { trpc } from "@/rpc/utils/trpc";
import React from "react";
import { operacaoMensalSchema } from "./operacao-mensal_schema";

type OperacaoMensalProps = {
  operacao: { operacao?: string };
  mesInicial: { mes?: string };
  mesCorrente: { mes?: string }[];
  onSelection?: (event: any) => void;
  children?: React.ReactNode;
};

export function OperacaoMensal({
  operacao,
  mesInicial,
  mesCorrente,
  children,
  onSelection,
}: OperacaoMensalProps) {
  const mensal = trpc.ordemProducaoOperacao.mensal.useQuery({
    operacao: operacao.operacao || "",
    mes: mesInicial.mes || "",
  });

  return (
    <Table
      rows={mensal.data}
      columns={operacaoMensalSchema}
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
