import { useQuery } from "@tanstack/react-query";
import { TEvent, TIds } from "../../../../types";
import { Table } from "../../../components/table/table";
import { esterilizacaoExternaService } from "../../../service/esterilizacao-externa.service";

type EsterilizacaoExternaMensalProp = {
  children?: React.ReactNode;
  mesCorrente: { mes?: string };
  mesInicial: { mes: string };
  onSelectEvent?: (event: TEvent) => void;
};

export function EsterilizacaoExternaMensal({
  mesInicial,
  mesCorrente,
  onSelectEvent,
  children,
}: EsterilizacaoExternaMensalProp) {
  const schema = useQuery({
    queryKey: ["esterilizacaoExternaMensalSchema"],
    queryFn: async () => esterilizacaoExternaService.schemaMensal(),
    staleTime: Infinity,
  });

  const mensal = useQuery({
    queryKey: ["esterilizacaoExternaMensal", mesInicial],
    queryFn: ({ queryKey }) => {
      const [_key, mesInicial] = queryKey as [string, TIds];
      return esterilizacaoExternaService.mensal(mesInicial.mes);
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
