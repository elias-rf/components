import { Table } from "@/client/components/table";
import { day } from "@/utils/date/day";
import { trpc } from "@/rpc/utils/trpc";
import { getSchema } from "./get-shema";

type ClienteValorProps = {
  id: number;
  dia?: string;
};

export function ClienteValor({ id, dia }: ClienteValorProps) {
  const inicio = day(dia)
    .subtract(1, "year")
    .startOf("month")
    .format("YYYY-MM-DD");
  const fim = day(dia).subtract(1, "month").endOf("month").format("YYYY-MM-DD");
  const columns = getSchema({ inicio, fim });
  const dataList = trpc.cliente.vendaMensalValor.useQuery(
    {
      inicio,
      fim,
      cliente: id,
    },
    {
      enabled: !!id,
    }
  );

  return (
    <Table
      rows={dataList.data ?? []}
      columns={columns}
    />
  );
}
