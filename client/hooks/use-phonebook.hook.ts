import { Id, Order, Where } from "@er/types";
import { isEmpty } from "@er/utils/src/is-empty";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  phonebookService,
  TPhonebookRecord,
} from "../service/agenda-telefone.service";

const UM_MINUTO = 60 * 1000;

const PHONEBOOK = "phonebook";
const PHONEBOOK_SCHEMA = "phonebookSchema";

export function usePhonebookList(where: Where[], orderBy: Order[]) {
  return useQuery(
    [PHONEBOOK, where, orderBy],
    ({ queryKey }) => {
      const [_key, where, orderBy] = queryKey as [string, Where[], Order[]];
      return phonebookService.list(where, orderBy);
    },
    {
      staleTime: UM_MINUTO,
    }
  );
}

export function usePhonebookRead(id: Id) {
  return useQuery(
    [PHONEBOOK, id],
    ({ queryKey }) => {
      const [_key, id] = queryKey as [string, Id];
      if (isEmpty(id)) return {};
      return phonebookService.read(id);
    },
    {
      staleTime: UM_MINUTO,
    }
  );
}

export function usePhonebookSchema() {
  return useQuery([PHONEBOOK_SCHEMA], async () => phonebookService.schema(), {
    staleTime: Infinity,
  });
}

export function usePhonebookCreate() {
  const cache = useQueryClient();
  return useMutation(
    (args: [TPhonebookRecord]) => phonebookService.create(...args),
    {
      onSuccess: () => cache.invalidateQueries([PHONEBOOK]),
    }
  );
}

export function usePhonebookDel() {
  const cache = useQueryClient();
  return useMutation(
    (args: [Id]) => {
      return phonebookService.del(...args);
    },
    {
      onSuccess: () => cache.invalidateQueries([PHONEBOOK]),
    }
  );
}

export function usePhonebookUpdate() {
  const cache = useQueryClient();
  return useMutation(
    (args: [Id, TPhonebookRecord]) => {
      return phonebookService.update(...args);
    },
    {
      onSuccess: () => cache.invalidateQueries([PHONEBOOK]),
    }
  );
}
