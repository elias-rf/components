import { useQuery } from "@tanstack/react-query";
import { TEvent, TIds } from "../../../../types";
import { Table } from "../../../components/table";
import { esterilizacaoInternaService } from "../../../service/esterilizacao-interna.service";

type EsterilizacaoInternaProdutoProp = {
  children?: any;
  diaCorrente: { dia?: string };
  produtoCorrente: { produto?: string };
  onSelectEvent?: (event: TEvent) => void;
};

export function EsterilizacaoInternaProduto({
  diaCorrente,
  children,
  produtoCorrente,
  onSelectEvent,
}: EsterilizacaoInternaProdutoProp) {
  const schema = useQuery({
    queryKey: ["esterilizacaoInternaProdutoSchema"],
    queryFn: async () => esterilizacaoInternaService.schemaProduto(),
    staleTime: Infinity,
  });

  const produto = useQuery({
    queryKey: ["esterilizacaoInternaProduto", diaCorrente],
    queryFn: ({ queryKey }) => {
      const [_key, diaCorrente] = queryKey as [string, TIds];
      if (diaCorrente.dia === undefined) return [];
      return esterilizacaoInternaService.produto(diaCorrente.dia);
    },
    staleTime: 1000 * 60 - 10, // 10 minutos
  });

  return (
    <Table
      name="produto"
      data={produto.data || []}
      schema={schema.data || []}
      selected={produtoCorrente}
      onSelectEvent={onSelectEvent}
    >
      {children}
    </Table>
  );
}
