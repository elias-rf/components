import type { TIds } from "@/types";
import { day } from "@/utils/date/day";
import { trpc } from "@/utils/trpc/trpc";
import { Table } from "../../components/search";
import { getSchema } from "./get-shema";

type ClienteValorProps = {
  id: TIds;
  dia?: string;
};

export function ClienteValor({ id, dia }: ClienteValorProps) {
  const inicio = day(dia)
    .subtract(1, "year")
    .startOf("month")
    .format("YYYY-MM-DD");
  const fim = day(dia).subtract(1, "month").endOf("month").format("YYYY-MM-DD");
  const schema = getSchema({ inicio, fim });
  const dataVendaMensalValor = trpc.cliente.vendaMensalValor.useQuery({
    inicio,
    fim,
    cliente: id.cliente_id,
  });

  return (
    <Table
      name="ClienteValor"
      data={dataVendaMensalValor.data}
      schema={schema}
    />
  );
}
