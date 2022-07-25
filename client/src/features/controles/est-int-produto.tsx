import { useQuery } from "@tanstack/react-query";
import { Table } from "../../components";
import { esterilizacaoInternaService } from "../../service/esterilizacao-interna.service";

export function EsterilizacaoInternaProduto({
  diaCorrente,
  children,
  produtoCorrente,
  dispatch,
}: any) {
  const schema = useQuery(
    ["esterilizacaoInternaProdutoSchema"],
    async () => esterilizacaoInternaService.schemaProduto(),
    { staleTime: Infinity }
  );

  const produto = useQuery(
    ["esterilizacaoInternaProduto", diaCorrente],
    ({ queryKey }) => {
      const [_key, [diaCorrente]] = queryKey as [string, string];
      if (diaCorrente === undefined) return [];
      return esterilizacaoInternaService.produto(diaCorrente);
    },
    {
      staleTime: 1000 * 60 - 10, // 10 minutos
    }
  );

  return (
    <Table
      data={produto.data || []}
      schema={schema.data}
      dispatch={dispatch}
      selected={produtoCorrente}
    >
      {children}
    </Table>
  );
}
