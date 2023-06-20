import { Table } from "@/client/components/table";
import { trpc } from "@/utils/trpc/trpc";
import React from "react";
import { operacaoModeloSchema } from "./operacao-modelo_schema";

type OperacaoModelProps = {
  operacao: { operacao?: string };
  dia: { dia?: string }[];
  produtoCorrente: { produto?: string }[];
  onSelectEvent?: (event: any) => void;
  children?: React.ReactNode;
};

export function OperacaoModelo({
  operacao,
  dia,
  produtoCorrente,
}: OperacaoModelProps) {
  const modelo = trpc.ordemProducaoOperacao.modelo.useQuery({
    operacao: operacao.operacao || "",
    data: dia[0]?.dia || "",
    produto: produtoCorrente[0]?.produto || "",
  });

  return (
    <Table
      rows={modelo.data}
      columns={operacaoModeloSchema}
    ></Table>
  );
}
