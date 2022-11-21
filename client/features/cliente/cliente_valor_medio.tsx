import { useQuery } from "@tanstack/react-query";
import type { TIds } from "../../../types";
import { day } from "../../../utils/date/day";
import { Table } from "../../components/table";
import { clienteService } from "../../service/cliente.service";

type ClienteValorMedioProps = {
  id: TIds;
};

export function ClienteValorMedio({ id }: ClienteValorMedioProps) {
  const inicio = day()
    .subtract(1, "year")
    .startOf("month")
    .format("YYYY-MM-DD");
  const fim = day().subtract(1, "month").endOf("month").format("YYYY-MM-DD");

  const schema = useQuery({
    queryKey: ["cliente", "schemaValorMedio"],
    queryFn: () => clienteService.vendaMensalValorMedioSchema({ inicio, fim }),
  });

  const valorMedio = useQuery({
    queryKey: ["cliente", "get", id.cliente_id, inicio, fim],
    queryFn: ({
      queryKey: [_key1, _key2, cliente, inicio, fim],
    }: {
      queryKey: [string, string, number, string, string];
    }) =>
      clienteService.vendaMensalValorMedio({
        cliente,
        inicio,
        fim,
      }),
  });
  return (
    <Table
      name="ClienteValorMedio"
      data={valorMedio.data}
      schema={schema.data || []}
    />
  );
}
