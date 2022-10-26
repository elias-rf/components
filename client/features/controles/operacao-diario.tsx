import { useQuery } from "@tanstack/react-query";
import { isEmpty } from "../../../utils/identify/is-empty";
import { Table } from "../../components/table/table";
import { day } from "../../lib/day";
import { operacaoService } from "../../service/operacao.service";

export function OperacaoDiario({
  operacao,
  mes,
  children,
  diaCorrente,
  dispatch,
}: any) {
  const schema = useQuery(
    ["operacaoDiarioSchema"],
    async () => operacaoService.schemaDiario(),
    { staleTime: Infinity }
  );

  const diario = useQuery(
    ["operacaoDiario", [operacao, mes]],
    ({ queryKey }) => {
      const [_key, [operacao, mes]] = queryKey as [string, string];
      if (isEmpty(operacao) || isEmpty(mes)) return [];
      return operacaoService.diario(
        operacao,
        day(mes + "-01")
          .startOf("month")
          .format("YYYY-MM-DD"),
        day(mes + "-01")
          .endOf("month")
          .format("YYYY-MM-DD")
      );
    },
    {
      staleTime: 1000 * 60 * 10, // 10 minutos
    }
  );

  return (
    <Table data={diario.data || []} schema={schema.data} selected={diaCorrente}>
      {children}
    </Table>
  );
}
