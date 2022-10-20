import { Table } from "../../components/table";
import {
  usePhonebookList,
  usePhonebookSchema,
} from "../../hooks/use-agenda-telefone.hook";
import { useQueryState } from "../../lib/hooks/use-query-state";

export function PhonebookList() {
  const [selected, setSelected] = useQueryState("selected", []);
  const [order, setOrder] = useQueryState("orderBy", []);
  const [where, setWhere] = useQueryState("where", []);
  const schema = usePhonebookSchema();
  const list = usePhonebookList(where, order);

  return (
    <section title="PhonebookList">
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
    </section>
  );
}
