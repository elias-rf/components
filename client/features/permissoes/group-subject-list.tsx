import { Table } from "../../components/table/table";
import {
  useGroupSubjectList,
  useGroupSubjectSchema,
} from "../../hooks/use-group-subject.hook";
import { useQueryState } from "../../lib/hooks/use-query-state";

/**
 * Componente para manipular Agenda de Ramais
 *
 * @returns {*} componente react
 */
export function GroupSubjectList() {
  const [selected, setSelected] = useQueryState("selected", []);
  const [order, setOrder] = useQueryState("orderBy", []);
  const [where, setWhere] = useQueryState("where", []);
  const schema = useGroupSubjectSchema();
  const list = useGroupSubjectList(where, order);

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
