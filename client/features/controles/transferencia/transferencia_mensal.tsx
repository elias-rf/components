import { useQuery } from "@tanstack/react-query";
import { TEvent, TIds } from "../../../../types";
import { Table } from "../../../components/table/table";
import { day } from "../../../lib/day";
import { transferenciaService } from "../../../service/transferencia.service";

type TransferenciaMensalProps = {
  mesCorrente: TIds;
  children?: React.ReactNode;
  onSelectEvent?: (event: TEvent) => void;
};
export function TransferenciaMensal({
  children,
  mesCorrente,
  onSelectEvent,
}: TransferenciaMensalProps) {
  const mesInicial = day().subtract(13, "month").format("YYYY-MM");
  const schema = useQuery({
    queryKey: ["transferenciaMensalSchema"],
    queryFn: async () => transferenciaService.schemaMensal(),
    staleTime: Infinity,
  });

  const mensal = useQuery({
    queryKey: ["transferenciaMensal", [mesInicial]],
    queryFn: ({ queryKey }) => {
      const [_key, [mesInicial]] = queryKey as [string, string[]];
      return transferenciaService.mensal(mesInicial);
    },
    staleTime: 1000 * 60 - 10, // 10 minutos
  });

  return (
    <Table
      name="mensal"
      data={mensal.data || []}
      schema={schema.data}
      selected={mesCorrente}
      onSelectEvent={onSelectEvent}
    >
      {children}
    </Table>
  );
}
