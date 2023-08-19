import { Table } from "@/client/components/table";
import { trpc } from "@/rpc/utils/trpc";
import { EsterilizacaoInternaProdutoSchema } from "./est-int-produto_schema";

type EsterilizacaoInternaProdutoProp = {
  children?: any;
  diaCorrente: { dia?: string }[];
  produtoCorrente: { produto?: string }[];
  onSelection?: (event: any) => void;
};

export function EsterilizacaoInternaProduto({
  diaCorrente,
  produtoCorrente,
  onSelection,
  children,
}: EsterilizacaoInternaProdutoProp) {
  const dataProduto = trpc.esterilizacaoInterna.produto.useQuery(
    {
      data: diaCorrente[0].dia || "",
    },
    { enabled: diaCorrente.length > 0 }
  );

  return (
    <Table
      rows={dataProduto.data || []}
      columns={EsterilizacaoInternaProdutoSchema}
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
