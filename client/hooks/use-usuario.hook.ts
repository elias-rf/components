import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Ids, Order, Where } from "../../types";
import { isEmpty } from "../../utils/identify/is-empty";
import { TUsuario, usuarioService } from "../service/usuario.service";

const UM_MINUTO = 60 * 1000;
const USUARIO = "usuario";
const USUARIO_SCHEMA = "usuarioSchema";

export function useUsuarioList(where: Where[], orderBy: Order[]) {
  return useQuery(
    [USUARIO, where, orderBy],
    ({ queryKey }) => {
      const [_key, where, orderBy] = queryKey as [string, Where[], Order[]];
      return usuarioService.list(where, orderBy);
    },
    {
      staleTime: UM_MINUTO,
    }
  );
}

export function useUsuarioRead(id: Ids) {
  return useQuery(
    [USUARIO, id],
    ({ queryKey }) => {
      const [_key, id] = queryKey as [string, Ids];
      if (isEmpty(id)) return {};
      return usuarioService.read(id);
    },
    {
      staleTime: UM_MINUTO,
    }
  );
}

export function useUsuarioSchema() {
  return useQuery([USUARIO_SCHEMA], async () => usuarioService.schema(), {
    staleTime: Infinity,
  });
}

export function useUsuarioCreate() {
  const cache = useQueryClient();
  return useMutation((args: [TUsuario]) => usuarioService.create(...args), {
    onSuccess: () => cache.invalidateQueries([USUARIO]),
  });
}

export function useUsuarioDel() {
  const cache = useQueryClient();
  return useMutation(
    (args: [Ids]) => {
      return usuarioService.del(...args);
    },
    {
      onSuccess: () => cache.invalidateQueries([USUARIO]),
    }
  );
}

export function useUsuarioUpdate() {
  const cache = useQueryClient();
  return useMutation(
    (args: [Ids, TUsuario]) => {
      return usuarioService.update(...args);
    },
    {
      onSuccess: () => cache.invalidateQueries([USUARIO]),
    }
  );
}
