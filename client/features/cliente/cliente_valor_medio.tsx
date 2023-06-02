import type { TIds } from "@/types";
import { day } from "@/utils/date/day";
import { trpc } from "@/utils/trpc/trpc";
import { Table } from "../../components/search";
import { getSchema } from "./get-shema";

type ClienteValorMedioProps = {
  id: TIds;
  dia?: string;
};

export function ClienteValorMedio({ id, dia }: ClienteValorMedioProps) {
  const inicio = day(dia)
    .subtract(1, "year")
    .startOf("month")
    .format("YYYY-MM-DD");
  const fim = day(dia).subtract(1, "month").endOf("month").format("YYYY-MM-DD");
  const schema = getSchema({ inicio, fim });
  const dataVendaMensalValorMedio = trpc.cliente.vendaMensalValorMedio.useQuery(
    {
      inicio,
      fim,
      cliente: id.cliente_id,
    }
  );

  return (
    <Table
      name="ClienteValorMedio"
      data={dataVendaMensalValorMedio.data}
      schema={schema}
    />
  );
}
