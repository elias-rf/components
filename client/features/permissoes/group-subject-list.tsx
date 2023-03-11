import React from "react";
import { groupSubjectStore } from "../../../model/group-subject/group-subject.store";
import { stores } from "../../../model/stores";
import { TIds, TOrder, TWhere } from "../../../types";
import { Table } from "../../components/table/table";
import { TTableEvent } from "../../components/table/table.types";

export type TGroupSubjectListEvent = TTableEvent;

type TGroupSubjectListProps = {
  selected: TIds;
  onSelectEvent: (event: TGroupSubjectListEvent) => void;
  where: TWhere[];
  onWhereEvent: (event: TGroupSubjectListEvent) => void;
  order: TOrder[];
  onOrderEvent: (event: TGroupSubjectListEvent) => void;
};

const { getList, getSchema } = stores.groupSubjectStore.getState();

/**
 * Componente para manipular Agenda de Ramais
 *
 * @returns {*} componente react
 */
export function GroupSubjectList({
  selected,
  onSelectEvent,
  where,
  onWhereEvent,
  order,
  onOrderEvent,
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
      onSelectEvent={(e) => onSelectEvent(e)}
      onWhereEvent={(e) => onWhereEvent(e)}
      onOrderEvent={(e) => onOrderEvent(e)}
    />
  );
}
