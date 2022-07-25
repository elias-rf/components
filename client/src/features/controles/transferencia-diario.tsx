import { useQuery } from "@tanstack/react-query";
import { Table } from "../../components";
import { day } from "../../lib/day";
import { transferenciaService } from "../../service/transferencia.service";

export function TransferenciaDiario({
  mesCorrente,
  diaCorrente,
  dispatch,
  children,
}: any) {
  const schema = useQuery(
    ["transferenciaDiarioSchema"],
    async () => transferenciaService.schemaDiario(),
    { staleTime: Infinity }
  );

  const diario = useQuery(
    ["transferenciaDiario", [mesCorrente]],
    ({ queryKey }) => {
      const [_key, [inicio, fim]] = queryKey as [string, string[]];
      return transferenciaService.diario(
        day(mesCorrente[0] + "-01")
          .startOf("month")
          .format("YYYY-MM-DD"),
        day(mesCorrente[0] + "-01")
          .endOf("month")
          .format("YYYY-MM-DD")
      );
    },
    {
      staleTime: 1000 * 60 - 10, // 10 minutos
    }
  );

  return (
    <Table
      data={diario.data || []}
      schema={schema.data}
      dispatch={dispatch}
      selected={diaCorrente}
    >
      {children}
    </Table>
  );
}
