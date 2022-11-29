import { useQuery } from "@tanstack/react-query";
import { TEvent, TIds } from "../../../../types";
import { Table } from "../../../components/table/table";
import { day } from "../../../lib/day";
import { esterilizacaoInternaService } from "../../../service/esterilizacao-interna.service";

type EsterilizacaoInternaDiarioProps = {
  children?: React.ReactNode;
  mesCorrente: { mes?: string };
  diaCorrente: { dia?: string };
  onSelectEvent: (event: TEvent) => void;
};

export function EsterilizacaoInternaDiario({
  children,
  mesCorrente,
  diaCorrente,
  onSelectEvent,
}: EsterilizacaoInternaDiarioProps) {
  const schema = useQuery({
    queryKey: ["esterilizacaoInternaDiarioSchema"],
    queryFn: async () => esterilizacaoInternaService.schemaDiario(),
    staleTime: Infinity,
  });

  const diario = useQuery({
    queryKey: ["esterilizacaoInternaDiario", mesCorrente],
    queryFn: ({ queryKey }) => {
      const [_key, mesCorrente] = queryKey as [string, TIds];
      if (mesCorrente.mes === undefined) return [];
      return esterilizacaoInternaService.diario(
        day(mesCorrente.mes + "-01")
          .startOf("month")
          .format("YYYY-MM-DD"),
        day(mesCorrente.mes + "-01")
          .endOf("month")
          .format("YYYY-MM-DD")
      );
    },
    staleTime: 1000 * 60 - 10, // 10 minutos
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
