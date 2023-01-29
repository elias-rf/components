import React from "react";
import type { TFieldClient, TIds, TOrder, TWhere } from "../../../types";
import { TCliente } from "../../../types/cliente.type";
import { cache } from "../../../utils/cache";
import { Table } from "../../components/table/table";
import { TTableEvent } from "../../components/table/table.types";
import { clienteService } from "../../service/cliente.service";

export type TClienteListEvent = TTableEvent;

type TClienteListProps = {
  selected: TIds;
  onSelectEvent: (event: TClienteListEvent) => void;
  where: TWhere[];
  onWhereEvent: (event: TClienteListEvent) => void;
  order: TOrder[];
  onOrderEvent: (event: TClienteListEvent) => void;
};

export function ClienteList({
  selected,
  onSelectEvent,
  where,
  onWhereEvent,
  order,
  onOrderEvent,
}: TClienteListProps) {
  const [schema, setSchema] = React.useState<TFieldClient[]>([]);
  const [data, setData] = React.useState<TCliente[]>([]);

  React.useEffect(() => {
    async function getSchema() {
      const rsp = await cache.fetch({
        key: "clienteService.schema",
        callback: clienteService.query.clienteSchema,
        expiresInSeconds: 3600,
        debug: true,
      });
      setSchema(rsp);
    }
    getSchema();
  }, []);

  React.useEffect(() => {
    async function getData() {
      const rsp = await cache.fetch({
        key: "clienteService.list",
        callback: clienteService.list,
        args: [where, order],
        debug: true,
      });
      setData(rsp);
    }
    getData();
  }, [where, order]);

  return (
    <Table
      schema={schema}
      data={data}
      selected={selected}
      order={order}
      where={where}
      onSelectEvent={(e) => onSelectEvent(e)}
      onWhereEvent={(e) => onWhereEvent(e)}
      onOrderEvent={(e) => onOrderEvent(e)}
    />
  );
}
