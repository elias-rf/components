import React from "react";
import { groupSubjectStore } from "../../../model/group-subject/group-subject.store";
import { stores } from "../../../model/stores";
import { TIds, TOrder, TWhere } from "../../../types";
import { TTable } from "../../components/table";
import { Table } from "../../components/table/table";

export type TGroupSubjectList = TTable;

type TGroupSubjectListProps = {
  selected: TIds;
  onSelect: (event: TGroupSubjectList) => void;
  where: TWhere[];
  onWhere: (event: TGroupSubjectList) => void;
  order: TOrder[];
  onOrder: (event: TGroupSubjectList) => void;
};

const { getList, getSchema } = stores.groupSubjectStore.getState();

/**
 * Componente para manipular Agenda de Ramais
 *
 * @returns {*} componente react
 */
export function GroupSubjectList({
  selected,
  onSelect,
  where,
  onWhere,
  order,
  onOrder,
}: TGroupSubjectListProps) {
  const dataSchema = groupSubjectStore((state) => state.dataSchema);
  const dataList = groupSubjectStore((state) => state.dataList);

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
