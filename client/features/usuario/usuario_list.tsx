import { TUsuarioFields } from "@mono/models/usuario/usuario.type";
import { TIds, TOrder, TWhere } from "@mono/types";
import { trpc } from "@mono/utils/trpc/trpc";
import { Table } from "../../components/table/table";
import { usuarioSchema } from "./usuario-schema";

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
  const dataList = trpc.usuario.list.useQuery({ where, order });

  return (
    <Table
      schema={usuarioSchema}
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
