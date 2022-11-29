import { useQuery } from "@tanstack/react-query";
import { TEvent, TIds } from "../../../../types";
import { Table } from "../../../components/table/table";
import { esterilizacaoInternaService } from "../../../service/esterilizacao-interna.service";

type EsterilizacaoInternaModeloProp = {
  diaCorrente: { dia?: string };
  produtoCorrente: { produto?: string };
  onSelectEvent: (event: TEvent) => void;
};

export function EsterilizacaoInternaModelo({
  diaCorrente,
  produtoCorrente,
  onSelectEvent,
}: EsterilizacaoInternaModeloProp) {
  const schema = useQuery({
    queryKey: ["esterilizacaoInternaModeloSchema"],
    queryFn: async () => esterilizacaoInternaService.schemaModelo(),
    staleTime: Infinity,
  });

  const modelo = useQuery({
    queryKey: ["esterilizacaoInternaModelo", diaCorrente, produtoCorrente],
    queryFn: ({ queryKey }) => {
      const [_key, diaCorrente, produtoCorrente] = queryKey as [
        string,
        TIds,
        TIds
      ];
      if (
        diaCorrente.dia === undefined ||
        produtoCorrente.produto === undefined
      )
        return [];
      return esterilizacaoInternaService.modelo(
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
