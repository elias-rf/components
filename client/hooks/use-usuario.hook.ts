import { TIds, TOrder, TWhere } from "../../types";
import { isEmpty } from "../../utils/identify/is_empty";
import { TUsuario, usuarioService } from "../service/usuario.service";

const UM_MINUTO = 60 * 1000;
const USUARIO = "usuario";
const USUARIO_SCHEMA = "usuarioSchema";

export function useUsuarioList(where: TWhere[], orderBy: TOrder[]) {
  return useQuery(
    [USUARIO, where, orderBy],
    ({ queryKey }) => {
      const [_key, where, orderBy] = queryKey as [string, TWhere[], TOrder[]];
      return usuarioService.list(where, orderBy);
    },
    {
      staleTime: UM_MINUTO,
    }
  );
}

export function useUsuarioRead(id: TIds) {
  return useQuery(
    [USUARIO, id],
    ({ queryKey }) => {
      const [_key, id] = queryKey as [string, TIds];
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
    (args: [TIds]) => {
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
    (args: [TIds, TUsuario]) => {
      return usuarioService.update(...args);
    },
    {
      onSuccess: () => cache.invalidateQueries([USUARIO]),
    }
  );
}
