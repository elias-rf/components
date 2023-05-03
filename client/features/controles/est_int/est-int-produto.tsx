import { trpc } from "@/utils/trpc/trpc";
import { Table } from "../../../components/table";
import { EsterilizacaoInternaProdutoSchema } from "./est-int-produto-schema";

type EsterilizacaoInternaProdutoProp = {
  children?: any;
  diaCorrente: { dia?: string };
  produtoCorrente: { produto?: string };
  onSelect?: (event: any) => void;
};

export function EsterilizacaoInternaProduto({
  diaCorrente,
  children,
  produtoCorrente,
  onSelect,
}: EsterilizacaoInternaProdutoProp) {
  const dataProduto = trpc.esterilizacaoInterna.modelo.useQuery({
    data: diaCorrente.dia || "",
    produto: produtoCorrente.produto || "",
  });

  return (
    <Table
      name="produto"
      data={dataProduto.data}
      schema={EsterilizacaoInternaProdutoSchema}
      selected={produtoCorrente}
      onSelect={onSelect}
    >
      {children}
    </Table>
  );
}
