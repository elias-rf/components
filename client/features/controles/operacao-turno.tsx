import { useQuery } from "@tanstack/react-query";
import { isEmpty } from "../../../utils/is-empty";
import { Table } from "../../components/table";
import { operacaoService } from "../../service/operacao.service";

export function OperacaoTurno({ operacao, dia }: any) {
  const schema = useQuery(
    ["operacaoTurnoSchema"],
    async () => operacaoService.schemaTurno(),
    { staleTime: Infinity }
  );

  const turno = useQuery(
    ["operacaoTurno", [operacao, dia]],
    ({ queryKey }) => {
      const [_key, [operacao, [dia]]] = queryKey as [string, string];
      if (isEmpty(operacao) || isEmpty(dia)) return [];
      return operacaoService.turno(operacao, dia);
    },
    {
      staleTime: 1000 * 60 * 10, // 10 minutos
    }
  );

  return (
    <Table
      data={turno.data || []}
      schema={schema.data}
    ></Table>
  );
}
