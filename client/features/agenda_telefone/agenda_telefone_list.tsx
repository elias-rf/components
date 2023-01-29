import React from "react";
import { TIds, TOrder, TWhere } from "../../../types";
import { TAgendaTelefoneFields } from "../../../types/agenda-telefone.type";
import { Table } from "../../components/table/table";
import { TTableEvent } from "../../components/table/table.types";
import { agendaTelefoneStore } from "../../service/agenda-telefone.service";

export type TAgendaTelefoneListEvent = TTableEvent;

type TAgendaTelefoneListProps = {
  selected: TIds;
  onSelectEvent: (event: TAgendaTelefoneListEvent) => void;
  where: TWhere<TAgendaTelefoneFields>[];
  onWhereEvent: (event: TAgendaTelefoneListEvent) => void;
  order: TOrder<TAgendaTelefoneFields>[];
  onOrderEvent: (event: TAgendaTelefoneListEvent) => void;
};

export function AgendaTelefoneList({
  selected,
  onSelectEvent,
  where,
  onWhereEvent,
  order,
  onOrderEvent,
}: TAgendaTelefoneListProps) {
  const getSchema = agendaTelefoneStore((state) => state.getSchema);
  const dataSchema = agendaTelefoneStore((state) => state.dataSchema);
  const getList = agendaTelefoneStore((state) => state.getList);
  const dataList = agendaTelefoneStore((state) => state.dataList);

  React.useEffect(() => {
    getSchema();
  }, [getSchema]);

  React.useEffect(() => {
    getList({ where, order });
  }, [where, order, getList]);

  return (
    <>
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
    </>
  );
}
