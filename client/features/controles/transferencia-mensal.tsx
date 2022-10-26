import { useQuery } from "@tanstack/react-query";
import { Table } from "../../components/table/table";
import { day } from "../../lib/day";
import { transferenciaService } from "../../service/transferencia.service";

export function TransferenciaMensal({ children, dispatch, mesCorrente }: any) {
  const mesInicial = day().subtract(13, "month").format("YYYY-MM");
  const schema = useQuery(
    ["transferenciaMensalSchema"],
    async () => transferenciaService.schemaMensal(),
    { staleTime: Infinity }
  );

  const mensal = useQuery(
    ["transferenciaMensal", [mesInicial]],
    ({ queryKey }) => {
      const [_key, [mesInicial]] = queryKey as [string, string[]];
      return transferenciaService.mensal(mesInicial);
    },
    {
      staleTime: 1000 * 60 - 10, // 10 minutos
    }
  );

  return (
    <Table data={mensal.data || []} schema={schema.data} selected={mesCorrente}>
      {children}
    </Table>
  );
}
