import { useQuery } from "react-query";
import { Table } from "../../components";
import { esterilizacaoExternaService } from "../../service/esterilizacao-externa.service";

export function EsterilizacaoExternaModelo({
  diaCorrente,
  produtoCorrente,
}: any) {
  const schema = useQuery(
    ["esterilizacaoExternaModeloSchema"],
    async () => esterilizacaoExternaService.schemaModelo(),
    { staleTime: Infinity }
  );

  const modelo = useQuery(
    ["esterilizacaoExternaModelo", [diaCorrente, produtoCorrente]],
    ({ queryKey }) => {
      const [_key, [[diaCorrente], [produtoCorrente]]] = queryKey as [
        string,
        string
      ];
      if (diaCorrente === undefined || produtoCorrente === undefined) return [];
      return esterilizacaoExternaService.modelo(diaCorrente, produtoCorrente);
    },
    {
      staleTime: 1000 * 60 - 10, // 10 minutos
    }
  );

  return (
    <Table
      data={modelo.data || []}
      schema={schema.data}
    ></Table>
  );
}
