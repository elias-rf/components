import { isEmpty } from "@er/utils/src/is-empty";
import { useQuery } from "react-query";
import { Table } from "../../components/table";
import { operacaoService } from "../../service/operacao.service";

export function OperacaoModelo({ operacao, dia, produto }: any) {
  const schema = useQuery(
    ["operacaoModeloSchema"],
    async () => operacaoService.schemaModelo(),
    { staleTime: Infinity }
  );

  const modelo = useQuery(
    ["operacaoModelo", [operacao, dia, produto]],
    ({ queryKey }) => {
      const [_key, [operacao, [dia], [produto]]] = queryKey as [string, string];
      if (isEmpty(operacao) || isEmpty(dia) || isEmpty(produto)) {
        return [];
      }
      return operacaoService.modelo(operacao, dia, produto);
    },
    {
      staleTime: 1000 * 60 * 10, // 10 minutos
    }
  );

  return (
    <Table
      data={modelo.data || []}
      schema={schema.data}
    ></Table>
  );
}
