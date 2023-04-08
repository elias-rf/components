import { trpc } from "../../../../utils/trpc/trpc";
import { Table } from "../../../components/table/table";
import { esterilizacaoExternaModeloSchema } from "./est-ext-modelo-schema";

type EsterilizacaoExternaModeloProp = {
  diaCorrente: { dia?: string };
  produtoCorrente: { produto?: string };
  onSelect: (event: any) => void;
};

export function EsterilizacaoExternaModelo({
  diaCorrente,
  produtoCorrente,
  onSelect,
}: EsterilizacaoExternaModeloProp) {
  const dataModelo = trpc.esterilizacaoExterna.modelo.useQuery({
    data: diaCorrente.dia || "",
    produto: produtoCorrente.produto || "",
  });

  return (
    <Table
      name="modelo"
      data={dataModelo.data}
      schema={esterilizacaoExternaModeloSchema}
      onSelect={onSelect}
    />
  );
}