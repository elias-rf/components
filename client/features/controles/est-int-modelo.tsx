import { useQuery } from "@tanstack/react-query";
import { Table } from "../../components/table/table";
import { esterilizacaoInternaService } from "../../service/esterilizacao-interna.service";

export function EsterilizacaoInternaModelo({
  diaCorrente,
  produtoCorrente,
}: any) {
  const schema = useQuery(
    ["esterilizacaoInternaModeloSchema"],
    async () => esterilizacaoInternaService.schemaModelo(),
    { staleTime: Infinity }
  );

  const modelo = useQuery(
    ["esterilizacaoInternaModelo", [diaCorrente, produtoCorrente]],
    ({ queryKey }) => {
      const [_key, [[diaCorrente], [produtoCorrente]]] = queryKey as [
        string,
        string
      ];
      if (diaCorrente === undefined || produtoCorrente === undefined) return [];
      return esterilizacaoInternaService.modelo(diaCorrente, produtoCorrente);
    },
    {
      staleTime: 1000 * 60 - 10, // 10 minutos
    }
  );

  return <Table data={modelo.data || []} schema={schema.data}></Table>;
}
