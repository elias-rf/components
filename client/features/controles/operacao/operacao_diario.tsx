import { useQuery } from "@tanstack/react-query";
import { TEvent, TIds } from "../../../../types";
import { isEmpty } from "../../../../utils/identify/is_empty";
import { Table } from "../../../components/table/table";
import { day } from "../../../lib/day";
import { operacaoService } from "../../../service/operacao.service";

type OperacaoDiarioProp = {
  operacao: TIds;
  mes: TIds;
  diaCorrente: TIds;
  children?: React.ReactNode;
  onSelectEvent?: (event: TEvent) => void;
};

export function OperacaoDiario({
  operacao,
  mes,
  diaCorrente,
  children,
  onSelectEvent,
}: OperacaoDiarioProp) {
  const schema = useQuery({
    queryKey: ["operacao_diario", "schema"],
    queryFn: operacaoService.schemaDiario,
    staleTime: Infinity,
  });

  const diario = useQuery({
    queryKey: ["operacao_diario", operacao, mes],
    queryFn: ({ queryKey }) => {
      const [_key, operacao, mes] = queryKey as [string, TIds, TIds];
      if (isEmpty(operacao.operacao) || isEmpty(mes.mes)) return [];
      return operacaoService.diario(
        operacao.operacao,
        day(mes.mes + "-01")
          .startOf("month")
          .format("YYYY-MM-DD"),
        day(mes.mes + "-01")
          .endOf("month")
          .format("YYYY-MM-DD")
      );
    },
    staleTime: 1000 * 60 * 10, // 10 minutos
  });

  return (
    <Table
      name="diario"
      data={diario.data || []}
      schema={schema.data || []}
      selected={diaCorrente}
      onSelectEvent={onSelectEvent}
    >
      {children}
    </Table>
  );
}
