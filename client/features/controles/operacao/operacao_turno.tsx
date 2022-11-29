import { useQuery } from "@tanstack/react-query";
import { TEvent, TIds } from "../../../../types";
import { isEmpty } from "../../../../utils/identify/is_empty";
import { Table } from "../../../components/table/table";
import { operacaoService } from "../../../service/operacao.service";

type OperacaoTurnoProps = {
  operacao: { operacao?: string };
  dia: { dia?: string };
  onSelectEvent?: (event: TEvent) => void;
};

export function OperacaoTurno({
  operacao,
  dia,
  onSelectEvent,
}: OperacaoTurnoProps) {
  const schema = useQuery({
    queryKey: ["operacaoTurnoSchema"],
    queryFn: async () => operacaoService.schemaTurno(),
    staleTime: Infinity,
  });

  const turno = useQuery({
    queryKey: ["operacaoTurno", operacao, dia],
    queryFn: ({ queryKey }) => {
      const [_key, operacao, dia] = queryKey as [string, TIds, TIds];
      if (isEmpty(operacao.operacao) || isEmpty(dia.dia)) return [];
      return operacaoService.turno(operacao.operacao, dia.dia);
    },

    staleTime: 1000 * 60 * 10, // 10 minutos
  });

  return (
    <Table
      data={turno.data || []}
      schema={schema.data || []}
      onSelectEvent={onSelectEvent}
    ></Table>
  );
}
