import React from "react";
import { usuarioStore } from "../../../model/usuario/usuario.store";
import { TUsuarioFields } from "../../../model/usuario/usuario.type";
import { TIds, TOrder, TWhere } from "../../../types";
import { Table } from "../../components/table/table";
import { TTableEvent } from "../../components/table/table.types";

export type TUsuarioListEvent = TTableEvent;

type TUsuarioListProps = {
  selected: TIds;
  onSelectEvent: (event: TUsuarioListEvent) => void;
  where: TWhere<TUsuarioFields>[];
  onWhereEvent: (event: TUsuarioListEvent) => void;
  order: TOrder<TUsuarioFields>[];
  onOrderEvent: (event: TUsuarioListEvent) => void;
};

export function UsuarioList({
  selected,
  onSelectEvent,
  where,
  onWhereEvent,
  order,
  onOrderEvent,
}: TUsuarioListProps) {
  const [dataSchema, getSchema] = usuarioStore((state) => [
    state.dataSchema,
    state.getSchema,
  ]);
  const [dataList, getList] = usuarioStore((state) => [
    state.dataList,
    state.getList,
  ]);

  React.useEffect(() => {
    getSchema();
  }, [getSchema]);

  React.useEffect(() => {
    getList({ where, order });
  }, [where, order, getList]);

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
