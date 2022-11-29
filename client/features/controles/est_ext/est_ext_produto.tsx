import { useQuery } from "@tanstack/react-query";
import { TEvent, TIds } from "../../../../types";
import { Table } from "../../../components/table/table";
import { esterilizacaoExternaService } from "../../../service/esterilizacao-externa.service";

type EsterilizacaoExternaProdutoProp = {
  children?: any;
  diaCorrente: { dia?: string };
  produtoCorrente: { produto?: string };
  onSelectEvent?: (event: TEvent) => void;
};

export function EsterilizacaoExternaProduto({
  diaCorrente,
  children,
  produtoCorrente,
  onSelectEvent,
}: EsterilizacaoExternaProdutoProp) {
  const schema = useQuery({
    queryKey: ["esterilizacaoExternaProdutoSchema"],
    queryFn: async () => esterilizacaoExternaService.schemaProduto(),
    staleTime: Infinity,
  });

  const produto = useQuery({
    queryKey: ["esterilizacaoExternaProduto", diaCorrente],
    queryFn: ({ queryKey }) => {
      const [_key, diaCorrente] = queryKey as [string, TIds];
      if (diaCorrente.dia === undefined) return [];
      return esterilizacaoExternaService.produto(diaCorrente.dia);
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
