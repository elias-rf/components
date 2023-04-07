import React from "react";
import { trpc } from "../../../../utils/trpc/trpc";
import { Table } from "../../../components/table/table";
import { operacaoModeloSchema } from "./operacao-modelo.schema";

type OperacaoModelProps = {
  operacao: { operacao?: string };
  dia: { dia?: string };
  produto: { produto?: string };
  children?: React.ReactNode;
  onSelectEvent?: (event: any) => void;
};

export function OperacaoModelo({ operacao, dia, produto }: OperacaoModelProps) {
  const modelo = trpc.ordemProducaoOperacao.modelo.useQuery({
    operacao: operacao.operacao || "",
    data: dia.dia || "",
    produto: produto.produto || "",
  });

  return (
    <Table
      name="modelo"
      data={modelo.data}
      schema={operacaoModeloSchema}
    ></Table>
  );
}
