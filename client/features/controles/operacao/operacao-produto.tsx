import { trpc } from "@/utils/trpc/trpc";
import { ReactNode } from "react";
import { Table } from "../../../components/search/table";
import { operacaoProdutoSchema } from "./operacao-produto.schema";

type OperacaoProdutoProps = {
  operacao: { operacao?: string };
  dia: { dia?: string };
  produtoCorrente: { produto?: string };
  children?: ReactNode;
  onSelect?: (event: any) => void;
};

export function OperacaoProduto({
  operacao,
  dia,
  children,
  produtoCorrente,
  onSelect,
}: OperacaoProdutoProps) {
  const produto = trpc.ordemProducaoOperacao.produto.useQuery({
    operacao: operacao.operacao || "",
    data: dia.dia || "",
    produto: produtoCorrente.produto || "",
  });

  return (
    <Table
      name="produto"
      data={produto.data}
      schema={operacaoProdutoSchema}
      selected={produtoCorrente}
      onSelect={onSelect}
    >
      {children}
    </Table>
  );
}
