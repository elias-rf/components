import { useQuery } from "@tanstack/react-query";
import { TEvent, TIds } from "../../../../types";
import { Table } from "../../../components/table/table";
import { esterilizacaoExternaService } from "../../../service/esterilizacao-externa.service";

type EsterilizacaoExternaModeloProp = {
  diaCorrente: { dia?: string };
  produtoCorrente: { produto?: string };
  onSelectEvent: (event: TEvent) => void;
};

export function EsterilizacaoExternaModelo({
  diaCorrente,
  produtoCorrente,
  onSelectEvent,
}: EsterilizacaoExternaModeloProp) {
  const schema = useQuery({
    queryKey: ["esterilizacaoExternaModeloSchema"],
    queryFn: async () => esterilizacaoExternaService.schemaModelo(),
    staleTime: Infinity,
  });

  const modelo = useQuery({
    queryKey: ["esterilizacaoExternaModelo", diaCorrente, produtoCorrente],
    queryFn: ({ queryKey }) => {
      const [_key, diaCorrente, produtoCorrente] = queryKey as [
        string,
        TIds,
        TIds
      ];
      if (diaCorrente === undefined || produtoCorrente === undefined) return [];
      return esterilizacaoExternaService.modelo(
        diaCorrente.dia,
        produtoCorrente.produto
      );
    },

    staleTime: 1000 * 60 - 10, // 10 minutos
  });

  return (
    <Table
      name="modelo"
      data={modelo.data || []}
      schema={schema.data || []}
      onSelectEvent={onSelectEvent}
    ></Table>
  );
}
