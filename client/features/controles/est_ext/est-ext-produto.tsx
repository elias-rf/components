import { Table } from "@/client/components/table";
import { trpc } from "@/rpc/utils/trpc";
import { EsterilizacaoExternaProdutoSchema } from "./est-ext-produto_schema";

type EsterilizacaoExternaProdutoProp = {
  children?: any;
  diaCorrente: { dia?: string }[];
  produtoCorrente: { produto?: string }[];
  onSelection?: (event: any) => void;
};

export function EsterilizacaoExternaProduto({
  diaCorrente,
  children,
  produtoCorrente,
  onSelection,
}: EsterilizacaoExternaProdutoProp) {
  const dataProduto = trpc.esterilizacaoExterna.produto.useQuery(
    {
      data: diaCorrente[0].dia || "",
    },
    { enabled: diaCorrente.length > 0 }
  );

  return (
    <Table
      rows={dataProduto.data || []}
      columns={EsterilizacaoExternaProdutoSchema}
      selection={produtoCorrente || []}
      onSelection={onSelection}
      getId={(rec: any) => ({
        produto: rec.produto,
      })}
    >
      {() => <>{children}</>}
    </Table>
  );
}
