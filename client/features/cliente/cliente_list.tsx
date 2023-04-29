import { TClienteFields } from "@mono/models/cliente/cliente.type";
import type { TIds, TOrder, TWhere } from "@mono/types";
import { trpc } from "@mono/utils/trpc/trpc";
import { Table } from "../../components/table/table";
import { clienteSchema } from "./cliente.schema";

type TClienteListProps = {
  selected: TIds;
  onSelect: (event: any) => void;
  where: TWhere<TClienteFields>[];
  onWhere: (event: any) => void;
  order: TOrder<TClienteFields>[];
  onOrder: (event: any) => void;
};

export function ClienteList({
  selected,
  onSelect,
  where,
  onWhere,
  order,
  onOrder,
}: TClienteListProps) {
  const dataList = trpc.agendaTelefone.list.useQuery({ where, order });

  return (
    <Table
      schema={clienteSchema}
      data={dataList.data}
      selected={selected}
      order={order}
      where={where}
      onSelect={onSelect}
      onWhere={onWhere}
      onOrder={onOrder}
    />
  );
}
