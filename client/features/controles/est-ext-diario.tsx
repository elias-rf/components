import { useQuery } from "@tanstack/react-query";
import { Dispatch } from "../../../types";
import { Table } from "../../components/table";
import { day } from "../../lib/day";
import { esterilizacaoExternaService } from "../../service/esterilizacao-externa.service";

type EsterilizacaoExternaDiarioProp = {
  children: any;
  mesCorrente: string[];
  diaCorrente: string[];
  dispatch: Dispatch;
};

export function EsterilizacaoExternaDiario({
  children,
  mesCorrente,
  diaCorrente,
  dispatch,
}: EsterilizacaoExternaDiarioProp) {
  const schema = useQuery(
    ["esterilizacaoExternaDiarioSchema"],
    async () => esterilizacaoExternaService.schemaDiario(),
    { staleTime: Infinity }
  );

  const diario = useQuery(
    ["esterilizacaoExternaDiario", mesCorrente],
    ({ queryKey }) => {
      const [_key, [mesCorrente]] = queryKey as [string, string];
      if (mesCorrente === undefined) return [];
      return esterilizacaoExternaService.diario(
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
