import { Id, Order, Where } from "@er/types";
import { isEmpty } from "@er/utils/src/is-empty";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { clienteService, TClienteRecord } from "../service/cliente.service";

const UM_MINUTO = 60 * 1000;

const CLIENTE = "cliente";
const CLIENTE_SCHEMA = "clienteSchema";

export function useClienteList(where: Where[], orderBy: Order[]) {
  return useQuery(
    [CLIENTE, where, orderBy],
    ({ queryKey }) => {
      const [_key, where, orderBy] = queryKey as [string, Where[], Order[]];
      console.log("useClienteList", where, orderBy);
      return clienteService.list(where, orderBy);
    },
    {
      staleTime: UM_MINUTO,
    }
  );
}

export function useClienteRead(id: Id) {
  return useQuery(
    [CLIENTE, id],
    ({ queryKey }) => {
      const [_key, id] = queryKey as [string, Id];
      if (isEmpty(id)) return {};
      return clienteService.read(id);
    },
    {
      staleTime: UM_MINUTO,
    }
  );
}

export function useClienteSchema() {
  return useQuery([CLIENTE_SCHEMA], async () => clienteService.schema(), {
    staleTime: Infinity,
  });
}

export function useClienteCreate() {
  const cache = useQueryClient();
  return useMutation(
    (args: [TClienteRecord]) => clienteService.create(...args),
    {
      onSuccess: () => cache.invalidateQueries([CLIENTE]),
    }
  );
}

export function useClienteDel() {
  const cache = useQueryClient();
  return useMutation(
    (args: [Id]) => {
      return clienteService.del(...args);
    },
    {
      onSuccess: () => cache.invalidateQueries([CLIENTE]),
    }
  );
}

export function useClienteUpdate() {
  const cache = useQueryClient();
  return useMutation(
    (args: [Id, TClienteRecord]) => {
      return clienteService.update(...args);
    },
    {
      onSuccess: () => cache.invalidateQueries([CLIENTE]),
    }
  );
}
