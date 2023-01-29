import React from "react";
import type { TFieldClient, TIds } from "../../../types";
import { cache } from "../../../utils/cache";
import { day } from "../../../utils/date/day";
import { Table } from "../../components/table";
import { clienteService } from "../../service/cliente.service";

type ClienteValorMedioProps = {
  id: TIds;
};

export function ClienteValorMedio({ id }: ClienteValorMedioProps) {
  const [schema, setSchema] = React.useState<TFieldClient[]>([]);
  const [data, setData] = React.useState<TFieldClient[]>([]);
  const inicio = day()
    .subtract(1, "year")
    .startOf("month")
    .format("YYYY-MM-DD");
  const fim = day().subtract(1, "month").endOf("month").format("YYYY-MM-DD");

  React.useEffect(() => {
    async function getSchema() {
      const rsp = await cache.fetch({
        key: "clienteService.vendaMensalValorMedioSchema",
        callback: clienteService.vendaMensalValorMedioSchema,
        args: [{ inicio, fim }],
        debug: true,
      });
      setSchema(rsp);
    }
    getSchema();
  }, [inicio, fim]);

  React.useEffect(() => {
    async function getData() {
      const rsp = await cache.fetch({
        key: "clienteService.vendaMensalValorMedio",
        callback: clienteService.vendaMensalValorMedio,
        args: [
          {
            cliente: id.cliente_id,
            inicio,
            fim,
          },
        ],
        debug: true,
      });
      setData(rsp);
    }
    getData();
  }, [id, inicio, fim]);

  return (
    <Table
      name="ClienteValorMedio"
      data={data}
      schema={schema}
    />
  );
}
