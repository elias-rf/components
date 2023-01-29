import React from "react";
import { TIds, TOrder, TWhere } from "../../../types";
import { TUsuarioFields } from "../../../types/usuario.type";
import { Table } from "../../components/table/table";
import { TTableEvent } from "../../components/table/table.types";
import { usuarioStore } from "../../service/usuario.service";

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
  const getSchema = usuarioStore((state) => state.getSchema);
  const dataSchema = usuarioStore((state) => state.dataSchema);
  const getList = usuarioStore((state) => state.getList);
  const dataList = usuarioStore((state) => state.dataList);

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
