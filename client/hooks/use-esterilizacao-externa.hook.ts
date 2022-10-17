import { Id, Order, Where } from "@er/types";
import { isEmpty } from "@er/utils/src/is-empty";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  esterilizacaoExternaService,
  TEsterilizacaoExternaRecord,
} from "../service/esterilizacao-externa.service";

const UM_MINUTO = 60 * 1000;

const ESTERILIZACAO_EXTERNA = "esterilizacaoExterna";
const ESTERILIZACAO_EXTERNA_SCHEMA = "esterilizacaoExternaSchema";

export function useEsterilizacaoExternaList(where: Where[], orderBy: Order[]) {
  return useQuery(
    [ESTERILIZACAO_EXTERNA, where, orderBy],
    ({ queryKey }) => {
      const [_key, where, orderBy] = queryKey as [string, Where[], Order[]];
      console.log("useEsterilizacaoExternaList", where, orderBy);
      return esterilizacaoExternaService.list(where, orderBy);
    },
    {
      staleTime: UM_MINUTO,
    }
  );
}

export function useEsterilizacaoExternaRead(id: Id) {
  return useQuery(
    [ESTERILIZACAO_EXTERNA, id],
    ({ queryKey }) => {
      const [_key, id] = queryKey as [string, Id];
      if (isEmpty(id)) return {};
      return esterilizacaoExternaService.read(id);
    },
    {
      staleTime: UM_MINUTO,
    }
  );
}

export function useEsterilizacaoExternaSchema() {
  return useQuery(
    [ESTERILIZACAO_EXTERNA_SCHEMA],
    async () => esterilizacaoExternaService.schema(),
    {
      staleTime: Infinity,
    }
  );
}

export function useEsterilizacaoExternaSchemaDiario() {
  return useQuery(
    [ESTERILIZACAO_EXTERNA_SCHEMA],
    async () => esterilizacaoExternaService.schemaDiario(),
    {
      staleTime: Infinity,
    }
  );
}

export function useEsterilizacaoExternaSchemaMensal() {
  return useQuery(
    [ESTERILIZACAO_EXTERNA_SCHEMA],
    async () => esterilizacaoExternaService.schemaMensal(),
    {
      staleTime: Infinity,
    }
  );
}

export function useEsterilizacaoExternaSchemaProduto() {
  return useQuery(
    [ESTERILIZACAO_EXTERNA_SCHEMA],
    async () => esterilizacaoExternaService.schemaProduto(),
    {
      staleTime: Infinity,
    }
  );
}

export function useEsterilizacaoExternaSchemaModelo() {
  return useQuery(
    [ESTERILIZACAO_EXTERNA_SCHEMA],
    async () => esterilizacaoExternaService.schemaModelo(),
    {
      staleTime: Infinity,
    }
  );
}

export function useEsterilizacaoExternaCreate() {
  const cache = useQueryClient();
  return useMutation(
    (args: [TEsterilizacaoExternaRecord]) =>
      esterilizacaoExternaService.create(...args),
    {
      onSuccess: () => cache.invalidateQueries([ESTERILIZACAO_EXTERNA]),
    }
  );
}

export function useEsterilizacaoExternaDel() {
  const cache = useQueryClient();
  return useMutation(
    (args: [Id]) => {
      return esterilizacaoExternaService.del(...args);
    },
    {
      onSuccess: () => cache.invalidateQueries([ESTERILIZACAO_EXTERNA]),
    }
  );
}

export function useEsterilizacaoExternaUpdate() {
  const cache = useQueryClient();
  return useMutation(
    (args: [Id, TEsterilizacaoExternaRecord]) => {
      return esterilizacaoExternaService.update(...args);
    },
    {
      onSuccess: () => cache.invalidateQueries([ESTERILIZACAO_EXTERNA]),
    }
  );
}
