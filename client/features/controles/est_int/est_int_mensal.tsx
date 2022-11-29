import { useQuery } from "@tanstack/react-query";
import { TEvent, TIds } from "../../../../types";
import { Table } from "../../../components/table/table";
import { esterilizacaoInternaService } from "../../../service/esterilizacao-interna.service";

type EsterilizacaoInternaMensalProp = {
  children?: React.ReactNode;
  mesCorrente: { mes?: string };
  mesInicial: { mes: string };
  onSelectEvent?: (event: TEvent) => void;
};

export function EsterilizacaoInternaMensal({
  mesInicial,
  mesCorrente,
  onSelectEvent,
  children,
}: EsterilizacaoInternaMensalProp) {
  const schema = useQuery({
    queryKey: ["esterilizacaoInternaMensalSchema"],
    queryFn: async () => esterilizacaoInternaService.schemaMensal(),
    staleTime: Infinity,
  });

  const mensal = useQuery({
    queryKey: ["esterilizacaoInternaMensal", mesInicial],
    queryFn: ({ queryKey }) => {
      const [_key, mesInicial] = queryKey as [string, TIds];
      return esterilizacaoInternaService.mensal(mesInicial.mes);
    },
    staleTime: 1000 * 60 - 10, // 10 minutos
  });

  return (
    <Table
      name="mensal"
      data={mensal.data || []}
      schema={schema.data || []}
      selected={mesCorrente}
      onSelectEvent={onSelectEvent}
    >
      {children}
    </Table>
  );
}
