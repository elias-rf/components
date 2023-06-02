import type { TIds, TOrder, TWhere } from "@/types";
import { trpc } from "@/utils/trpc/trpc";
import { Table } from "../../components/search/table";
import { clienteSchema } from "./cliente.schema";

type TClienteListProps = {
  selected: TIds;
  onSelect: (event: any) => void;
  where: TWhere[];
  onWhere: (event: any) => void;
  order: TOrder[];
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
