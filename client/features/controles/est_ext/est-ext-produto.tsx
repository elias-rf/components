import { trpc } from "@/utils/trpc/trpc";
import { Table } from "../../../components/search/table";
import { EsterilizacaoExternaProdutoSchema } from "./est-ext-produto-schema";

type EsterilizacaoExternaProdutoProp = {
  children?: any;
  diaCorrente: { dia?: string };
  produtoCorrente: { produto?: string };
  onSelect?: (event: any) => void;
};

export function EsterilizacaoExternaProduto({
  diaCorrente,
  children,
  produtoCorrente,
  onSelect,
}: EsterilizacaoExternaProdutoProp) {
  const dataProduto = trpc.esterilizacaoExterna.produto.useQuery({
    data: diaCorrente.dia || "",
  });

  return (
    <Table
      name="produto"
      data={dataProduto.data}
      schema={EsterilizacaoExternaProdutoSchema}
      selected={produtoCorrente}
      onSelect={onSelect}
    >
      {children}
    </Table>
  );
}
