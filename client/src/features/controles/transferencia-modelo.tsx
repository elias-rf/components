import { useQuery } from "@tanstack/react-query";
import { Table } from "../../components";
import { transferenciaService } from "../../service/transferencia.service";

export function TransferenciaModelo({ diaCorrente, dispatch, children }: any) {
  const schema = useQuery(
    ["transferenciaModeloSchema"],
    async () => transferenciaService.schemaModelo(),
    { staleTime: Infinity }
  );

  const modelo = useQuery(
    ["transferenciaModelo", [diaCorrente]],
    ({ queryKey }) => {
      const [_key, [diaCorrente]] = queryKey as [string, string[]];
      return transferenciaService.modelo(diaCorrente[0]);
    },
    {
      staleTime: 1000 * 60 - 10, // 10 minutos
    }
  );

  return (
    <Table
      data={modelo.data || []}
      schema={schema.data}
      dispatch={dispatch}
    >
      {children}
    </Table>
  );
}
