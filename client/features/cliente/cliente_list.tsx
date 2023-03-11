import React from "react";
import { clienteStore } from "../../../model/cliente/cliente.store";
import { TClienteFields } from "../../../model/cliente/cliente.type";
import type { TIds, TOrder, TWhere } from "../../../types";
import { Table } from "../../components/table/table";
import { TTableEvent } from "../../components/table/table.types";

export type TClienteListEvent = TTableEvent;

type TClienteListProps = {
  selected: TIds;
  onSelectEvent: (event: TClienteListEvent) => void;
  where: TWhere<TClienteFields>[];
  onWhereEvent: (event: TClienteListEvent) => void;
  order: TOrder<TClienteFields>[];
  onOrderEvent: (event: TClienteListEvent) => void;
};

const { getSchema, getList } = clienteStore.getState();

export function ClienteList({
  selected,
  onSelectEvent,
  where,
  onWhereEvent,
  order,
  onOrderEvent,
}: TClienteListProps) {
  const dataSchema = clienteStore((state) => state.dataSchema);
  const dataList = clienteStore((state) => state.dataList);

  React.useEffect(() => {
    getSchema();
  }, []);

  React.useEffect(() => {
    getList({ where, order });
  }, [where, order]);

  return (
    <Table
      schema={dataSchema}
      data={dataList}
      selected={selected}
      order={order}
      where={where}
      onSelectEvent={(e) => onSelectEvent(e)}
      onWhereEvent={(e) => onWhereEvent(e)}
      onOrderEvent={(e) => onOrderEvent(e)}
    />
  );
}
