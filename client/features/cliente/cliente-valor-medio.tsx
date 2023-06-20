import { Table } from "@/client/components/table";
import { day } from "@/utils/date/day";
import { trpc } from "@/utils/trpc/trpc";
import { getSchema } from "./get-shema";

type ClienteValorMedioProps = {
  id: number;
  dia?: string;
};

export function ClienteValorMedio({ id, dia }: ClienteValorMedioProps) {
  const inicio = day(dia)
    .subtract(1, "year")
    .startOf("month")
    .format("YYYY-MM-DD");
  const fim = day(dia).subtract(1, "month").endOf("month").format("YYYY-MM-DD");
  const columns = getSchema({ inicio, fim });
  const dataList = trpc.cliente.vendaMensalValorMedio.useQuery(
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
