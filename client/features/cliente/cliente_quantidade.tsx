import type { TIds } from "@mono/types";
import { day } from "@mono/utils/date/day";
import { trpc } from "@mono/utils/trpc/trpc";
import { Table } from "../../components/table";
import { getSchema } from "./get-shema";

type ClienteQuantidadeProps = {
  id: TIds;
  dia?: string;
};

export function ClienteQuantidade({ id, dia }: ClienteQuantidadeProps) {
  const inicio = day(dia)
    .subtract(1, "year")
    .startOf("month")
    .format("YYYY-MM-DD");
  const fim = day(dia).subtract(1, "month").endOf("month").format("YYYY-MM-DD");
  const schema = getSchema({ inicio, fim });
  const dataVendaMensalQuantidade = trpc.cliente.vendaMensalQuantidade.useQuery(
    {
      inicio,
      fim,
      cliente: id.cliente_id,
    }
  );

  return (
    <Table
      name="ClienteQuantidade"
      data={dataVendaMensalQuantidade.data}
      schema={schema}
    />
  );
}
