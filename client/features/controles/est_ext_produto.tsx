import { Table } from "../../components/table/table";
import { esterilizacaoExternaService } from "../../service/esterilizacao-externa.service";

type EsterilizacaoExternaProdutoProp = {
  children: any;
  diaCorrente: string[];
  produtoCorrente: string[];
  dispatch: any;
};

export function EsterilizacaoExternaProduto({
  diaCorrente,
  children,
  produtoCorrente,
  dispatch,
}: EsterilizacaoExternaProdutoProp) {
  const schema = useQuery(
    ["esterilizacaoExternaProdutoSchema"],
    async () => esterilizacaoExternaService.schemaProduto(),
    { staleTime: Infinity }
  );

  const produto = useQuery(
    ["esterilizacaoExternaProduto", diaCorrente],
    ({ queryKey }) => {
      const [_key, [diaCorrente]] = queryKey as [string, string];
      if (diaCorrente === undefined) return [];
      return esterilizacaoExternaService.produto(diaCorrente);
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
