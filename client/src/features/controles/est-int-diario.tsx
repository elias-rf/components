import { useQuery } from "react-query";
import { Table } from "../../components/table";
import { day } from "../../lib/day";
import { esterilizacaoInternaService } from "../../service/esterilizacao-interna.service";

export function EsterilizacaoInternaDiario({
  children,
  mesCorrente,
  diaCorrente,
  dispatch,
}: any) {
  const schema = useQuery(
    ["esterilizacaoInternaDiarioSchema"],
    async () => esterilizacaoInternaService.schemaDiario(),
    { staleTime: Infinity }
  );

  const diario = useQuery(
    ["esterilizacaoInternaDiario", mesCorrente],
    ({ queryKey }) => {
      const [_key, [mesCorrente]] = queryKey as [string, string];
      if (mesCorrente === undefined) return [];
      return esterilizacaoInternaService.diario(
        day(mesCorrente + "-01")
          .startOf("month")
          .format("YYYY-MM-DD"),
        day(mesCorrente + "-01")
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
      selected={diaCorrente}
      dispatch={dispatch}
    >
      {children}
    </Table>
  );
}
