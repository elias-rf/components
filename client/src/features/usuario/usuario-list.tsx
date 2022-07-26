import { useQuery } from "@tanstack/react-query";
import type { Action, Id, OrderBy, Where } from "../../../../types";
import { Table } from "../../components";
import { usuarioService } from "../../service/usuario.service";

type UsuarioListProps = {
  selected: Id;
  orderBy: OrderBy[];
  where: Where[];
  dispatch: (action: Action) => void;
};

export function UsuarioList({
  selected,
  orderBy,
  where,
  dispatch,
}: UsuarioListProps) {
  const schema = useQuery(
    ["usuarioSchema"],
    async () => usuarioService.schema(),
    { staleTime: Infinity }
  );

  const list = useQuery(
    ["usuario", where, orderBy],
    ({ queryKey }) => {
      const [_key, where, orderBy] = queryKey as [string, Where[], OrderBy[]];
      return usuarioService.list(where, orderBy);
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
