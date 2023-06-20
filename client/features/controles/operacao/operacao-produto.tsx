import { Table } from "@/client/components/table";
import { TSelection } from "@/types";
import { trpc } from "@/utils/trpc/trpc";
import { ReactNode } from "react";
import { operacaoProdutoSchema } from "./operacao-produto_schema";

type OperacaoProdutoProps = {
  operacao: { operacao?: string };
  dia: { dia?: string }[];
  produtoCorrente: { produto?: string }[];
  onSelect?: (event: TSelection) => void;
  children?: ReactNode;
};

export function OperacaoProduto({
  operacao,
  dia,
  children,
  produtoCorrente,
  onSelect,
}: OperacaoProdutoProps) {
  const produto = trpc.ordemProducaoOperacao.produto.useQuery(
    {
      operacao: operacao.operacao || "",
      data: dia[0]?.dia || "",
      produto: produtoCorrente[0]?.produto || "",
    },
    { enabled: produtoCorrente.length > 0 }
  );

  return (
    <Table
      rows={produto.data || []}
      columns={operacaoProdutoSchema}
      selection={produtoCorrente}
      onSelection={onSelect}
      getId={(rec: any) => ({
        produto: rec.produto,
      })}
    >
      {() => <>{children}</>}
    </Table>
  );
}
