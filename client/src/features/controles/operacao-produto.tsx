import { useQuery } from "@tanstack/react-query";
import { isEmpty } from "../../../../utils";
import { Table } from "../../components";
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
      dispatch={dispatch}
      selected={produtoCorrente}
    >
      {children}
    </Table>
  );
}
