import React from "react";
import { usuarioStore } from "../../../model/usuario/usuario.store";
import { TUsuarioFields } from "../../../model/usuario/usuario.type";
import { TIds, TOrder, TWhere } from "../../../types";
import { Table } from "../../components/table/table";

type TUsuarioListProps = {
  selected: TIds;
  onSelect: (event: any) => void;
  where: TWhere<TUsuarioFields>[];
  onWhere: (event: any) => void;
  order: TOrder<TUsuarioFields>[];
  onOrder: (event: any) => void;
};

export function UsuarioList({
  selected,
  onSelect,
  where,
  onWhere,
  order,
  onOrder,
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
      onSelect={(e) => onSelect(e)}
      onWhere={(e) => onWhere(e)}
      onOrder={(e) => onOrder(e)}
    />
  );
}
