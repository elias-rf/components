import React from "react";
import { clienteStore } from "../../../model/cliente/cliente.store";
import { TClienteFields } from "../../../model/cliente/cliente.type";
import type { TIds, TOrder, TWhere } from "../../../types";
import { Table } from "../../components/table/table";

type TClienteListProps = {
  selected: TIds;
  onSelect: (event: any) => void;
  where: TWhere<TClienteFields>[];
  onWhere: (event: any) => void;
  order: TOrder<TClienteFields>[];
  onOrder: (event: any) => void;
};

const { getSchema, getList } = clienteStore.getState();

export function ClienteList({
  selected,
  onSelect,
  where,
  onWhere,
  order,
  onOrder,
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
      onSelect={(e) => onSelect(e)}
      onWhere={(e) => onWhere(e)}
      onOrder={(e) => onOrder(e)}
    />
  );
}
