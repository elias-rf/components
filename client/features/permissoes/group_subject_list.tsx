import React from "react";
import { TFieldClient, TIds, TOrder, TWhere } from "../../../types";
import { cache } from "../../../utils/cache";
import { Table } from "../../components/table/table";
import { TTableEvent } from "../../components/table/table.types";
import {
  groupSubjectService,
  TGroupSubject,
} from "../../service/group-subject.service";

export type TGroupSubjectListEvent = TTableEvent;

type TGroupSubjectListProps = {
  selected: TIds;
  onSelectEvent: (event: TGroupSubjectListEvent) => void;
  where: TWhere[];
  onWhereEvent: (event: TGroupSubjectListEvent) => void;
  order: TOrder[];
  onOrderEvent: (event: TGroupSubjectListEvent) => void;
};

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
  const [schema, setSchema] = React.useState<TFieldClient[]>([]);
  const [data, setData] = React.useState<TGroupSubject[]>([]);

  React.useEffect(() => {
    async function getSchema() {
      const rsp = await cache.fetch({
        key: "groupSubjectService.schema",
        callback: groupSubjectService.schema,
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
        key: "groupSubjectService.list",
        callback: groupSubjectService.list,
        args: [where, order],
        expiresInSeconds: 60,
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
