import { Table } from "@/client/components/table";
import { trpc } from "@/rpc/utils/trpc";
import { esterilizacaoInternaModeloSchema } from "./est-int-modelo_schema";

type EsterilizacaoInternaModeloProp = {
  diaCorrente: { dia?: string }[];
  produtoCorrente: { produto?: string }[];
};

export function EsterilizacaoInternaModelo({
  diaCorrente,
  produtoCorrente,
}: EsterilizacaoInternaModeloProp) {
  const dataModelo = trpc.esterilizacaoInterna.modelo.useQuery(
    {
      data: diaCorrente[0].dia || "",
      produto: produtoCorrente[0].produto || "",
    },
    { enabled: diaCorrente.length > 0 && produtoCorrente.length > 0 }
  );

  return (
    <Table
      rows={dataModelo.data || []}
      columns={esterilizacaoInternaModeloSchema}
    ></Table>
  );
}
