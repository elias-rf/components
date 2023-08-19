import { Table } from "@/client/components/table";
import { trpc } from "@/rpc/utils/trpc";
import { esterilizacaoExternaModeloSchema } from "./est-ext-modelo_schema";

type EsterilizacaoExternaModeloProp = {
  diaCorrente: { dia?: string }[];
  produtoCorrente: { produto?: string }[];
};

export function EsterilizacaoExternaModelo({
  diaCorrente,
  produtoCorrente,
}: EsterilizacaoExternaModeloProp) {
  const dataModelo = trpc.esterilizacaoExterna.modelo.useQuery(
    {
      data: diaCorrente[0].dia || "",
      produto: produtoCorrente[0].produto || "",
    },
    { enabled: diaCorrente.length > 0 && produtoCorrente.length > 0 }
  );

  return (
    <Table
      rows={dataModelo.data || []}
      columns={esterilizacaoExternaModeloSchema}
    />
  );
}
