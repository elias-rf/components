import { useQuery } from "@tanstack/react-query";
import { TIds, TOrder, TWhere } from "../../../types";
import { Table } from "../../components/table/table";
import { TTableEvent } from "../../components/table/table.types";
import { agendaTelefoneService } from "../../service/agenda_telefone.service";

export type TAgendaTelefoneListEvent = TTableEvent;

type TAgendaTelefoneListProps = {
  selected: TIds;
  onSelectEvent: (event: TAgendaTelefoneListEvent) => void;
  where: TWhere[];
  onWhereEvent: (event: TAgendaTelefoneListEvent) => void;
  order: TOrder[];
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
  const schema = useQuery({
    queryKey: ["agenda_telefone", "schema"],
    queryFn: agendaTelefoneService.schema,
  });

  const list = useQuery({
    queryKey: ["agenda_telefone", "get", where, order],
    queryFn: ({ queryKey }) =>
      agendaTelefoneService.list(
        queryKey[2] as TWhere[],
        queryKey[3] as TOrder[]
      ),
  });

  return (
    <Table
      schema={schema.data || []}
      data={list.data || []}
      selected={selected}
      order={order}
      where={where}
      onSelectEvent={(e) => onSelectEvent(e)}
      onWhereEvent={(e) => onWhereEvent(e)}
      onOrderEvent={(e) => onOrderEvent(e)}
    />
  );
}
