import { isEmpty } from "../../../utils/identify/is_empty";
import { Table } from "../../components/table/table";
import { operacaoService } from "../../service/operacao.service";

export function OperacaoProduto({
  operacao,
  dia,
  children,
  produtoCorrente,
  dispatch,
}: any) {
  const schema = useQuery(
    ["operacaoProdutoSchema"],
    async () => operacaoService.schemaProduto(),
    { staleTime: Infinity }
  );

  const produto = useQuery(
    ["operacaoProduto", [operacao, dia]],
    ({ queryKey }) => {
      const [_key, [operacao, [dia]]] = queryKey as [string, string];
      if (isEmpty(operacao) || isEmpty(dia)) return [];
      return operacaoService.produto(operacao, dia);
    },
    {
      staleTime: 1000 * 60 * 10, // 10 minutos
    }
  );

  return (
    <Table
      data={produto.data || []}
      schema={schema.data}
      selected={produtoCorrente}
    >
      {children}
    </Table>
  );
}
