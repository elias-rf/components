import { trpc } from "@/utils/trpc/trpc";
import { Table } from "../../../components/search/table";
import { esterilizacaoInternaModeloSchema } from "./est-int-modelo-schema";

type EsterilizacaoInternaModeloProp = {
  diaCorrente: { dia?: string };
  produtoCorrente: { produto?: string };
  onSelect: (event: any) => void;
};

export function EsterilizacaoInternaModelo({
  diaCorrente,
  produtoCorrente,
  onSelect,
}: EsterilizacaoInternaModeloProp) {
  const dataModelo = trpc.esterilizacaoInterna.modelo.useQuery({
    data: diaCorrente.dia || "",
    produto: produtoCorrente.produto || "",
  });

  return (
    <Table
      data={dataModelo.data}
      schema={esterilizacaoInternaModeloSchema}
      onSelect={onSelect}
    ></Table>
  );
}
