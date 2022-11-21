import { useQuery } from "@tanstack/react-query";
import type { TIds, TOrder, TWhere } from "../../../types";
import { Table } from "../../components/table/table";
import { TTableEvent } from "../../components/table/table.types";
import { clienteService } from "../../service/cliente.service";

export type TClienteListEvent = TTableEvent;

type TClienteListProps = {
  selected: TIds;
  onSelectEvent: (event: TClienteListEvent) => void;
  where: TWhere[];
  onWhereEvent: (event: TClienteListEvent) => void;
  order: TOrder[];
  onOrderEvent: (event: TClienteListEvent) => void;
};

export function ClienteList({
  selected,
  onSelectEvent,
  where,
  onWhereEvent,
  order,
  onOrderEvent,
}: TClienteListProps) {
  const schema = useQuery({
    queryKey: ["cliente", "schema"],
    queryFn: clienteService.schema,
  });

  const list = useQuery({
    queryKey: ["cliente", "get", where, order],
    queryFn: ({ queryKey }) =>
      clienteService.list(queryKey[2] as TWhere[], queryKey[3] as TOrder[]),
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
