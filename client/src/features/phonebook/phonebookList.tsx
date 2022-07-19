import { useQuery } from "react-query";
import type { Action, Id, OrderBy, Where } from "../../../../types";
import { Table } from "../../components";
import { phonebookService } from "../../service/phonebook.service";

type PhonebookListProps = {
  selected: Id;
  orderBy: OrderBy[];
  where: Where[];
  dispatch: (action: Action) => void;
};

export function PhonebookList({
  selected,
  orderBy,
  where,
  dispatch,
}: PhonebookListProps) {
  const schema = useQuery(
    ["phonebookSchema"],
    async () => phonebookService.schema(),
    { staleTime: Infinity }
  );

  const list = useQuery(
    ["phonebook", where, orderBy],
    ({ queryKey }) => {
      const [_key, where, orderBy] = queryKey as [string, Where[], OrderBy[]];
      return phonebookService.list(where, orderBy);
    },
    {
      staleTime: 1000 * 60, // 1 minuto
    }
  );

  return (
    <Table
      schema={schema.data}
      data={list.data}
      selected={selected}
      orderBy={orderBy}
      where={where}
      dispatch={dispatch}
    />
  );
}
