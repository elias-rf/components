import { useQuery } from "@tanstack/react-query";
import { ReactNode } from "react";
import { TEvent, TIds } from "../../../../types";
import { Table } from "../../../components/table/table";
import { day } from "../../../lib/day";
import { transferenciaService } from "../../../service/transferencia.service";

type TransferenciaDiarioProps = {
  mesCorrente: { mes?: string };
  diaCorrente: { dia?: string };
  onSelectEvent?: (event: TEvent) => void;
  children?: ReactNode;
};
export function TransferenciaDiario({
  mesCorrente,
  diaCorrente,
  onSelectEvent,
  children,
}: TransferenciaDiarioProps) {
  const schema = useQuery({
    queryKey: ["transferenciaDiarioSchema"],
    queryFn: async () => transferenciaService.schemaDiario(),
    staleTime: Infinity,
  });

  const diario = useQuery({
    queryKey: ["transferenciaDiario", mesCorrente],
    queryFn: ({ queryKey }) => {
      const [_key, mesCorrente] = queryKey as [string, TIds];
      return transferenciaService.diario(
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
      schema={schema.data}
      selected={diaCorrente}
      onSelectEvent={onSelectEvent}
    >
      {children}
    </Table>
  );
}
