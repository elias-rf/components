import { useQuery } from "@tanstack/react-query";
import React from "react";
import { TEvent, TIds } from "../../../../types";
import { Table } from "../../../components/table/table";
import { day } from "../../../lib/day";
import { esterilizacaoExternaService } from "../../../service/esterilizacao-externa.service";

type EsterilizacaoExternaDiarioProp = {
  children?: React.ReactNode;
  mesCorrente: { mes?: string };
  diaCorrente: { dia?: string };
  onSelectEvent: (event: TEvent) => void;
};

export function EsterilizacaoExternaDiario({
  children,
  mesCorrente,
  diaCorrente,
  onSelectEvent,
}: EsterilizacaoExternaDiarioProp) {
  const schema = useQuery({
    queryKey: ["esterilizacaoExternaDiarioSchema"],
    queryFn: async () => esterilizacaoExternaService.schemaDiario(),
    staleTime: Infinity,
  });

  const diario = useQuery({
    queryKey: ["esterilizacaoExternaDiario", mesCorrente],
    queryFn: ({ queryKey }) => {
      const [_key, mesCorrente] = queryKey as [string, TIds];
      if (mesCorrente.mes === undefined) return [];
      return esterilizacaoExternaService.diario(
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
