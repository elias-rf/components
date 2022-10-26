import { Table } from "../../components/table/table";
import { useUsuarioList, useUsuarioSchema } from "../../hooks/use-usuario.hook";
import { useQueryState } from "../../lib/hooks/use-query-state";

export function UsuarioList() {
  const [selected, setSelected] = useQueryState("selected", []);
  const [order, setOrder] = useQueryState("orderBy", []);
  const [where, setWhere] = useQueryState("where", []);
  const schema = useUsuarioSchema();
  const list = useUsuarioList(where, order);

  return (
    <Table
      schema={schema.data}
      data={list.data}
      selected={selected}
      order={order}
      where={where}
      onSelect={(e) => setSelected(e.value)}
      onWhere={(e) => setWhere(e.value)}
      onOrder={(e) => setOrder(e.value)}
    />
  );
}
