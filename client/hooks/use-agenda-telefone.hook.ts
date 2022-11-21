import { TIds, TOrder, TWhere } from "../../types";
import { isEmpty } from "../../utils/identify/is_empty";
import { agendaTelefoneService } from "../service/agenda_telefone.service";

import { TAgendaTelefone } from "../../types/agenda_telefone.type";

const UM_MINUTO = 60 * 1000;

const PHONEBOOK = "phonebook";
const PHONEBOOK_SCHEMA = "phonebookSchema";

export function usePhonebookList(where: TWhere[], orderBy: TOrder[]) {
  return useQuery(
    [PHONEBOOK, where, orderBy],
    ({ queryKey }) => {
      const [_key, where, orderBy] = queryKey as [string, TWhere[], TOrder[]];
      return agendaTelefoneService.list(where, orderBy);
    },
    {
      staleTime: UM_MINUTO,
    }
  );
}

export function usePhonebookRead(id: TIds) {
  return useQuery(
    [PHONEBOOK, id],
    ({ queryKey }) => {
      const [_key, id] = queryKey as [string, TIds];
      if (isEmpty(id)) return {};
      return agendaTelefoneService.read(id);
    },
    {
      staleTime: UM_MINUTO,
    }
  );
}

export function usePhonebookSchema() {
  return useQuery(
    [PHONEBOOK_SCHEMA],
    async () => agendaTelefoneService.schema(),
    {
      staleTime: Infinity,
    }
  );
}

export function usePhonebookCreate() {
  const cache = useQueryClient();
  return useMutation(
    (args: [TAgendaTelefone]) => agendaTelefoneService.create(...args),
    {
      onSuccess: () => cache.invalidateQueries([PHONEBOOK]),
    }
  );
}

export function usePhonebookDel() {
  const cache = useQueryClient();
  return useMutation(
    (args: [TIds]) => {
      return agendaTelefoneService.del(...args);
    },
    {
      onSuccess: () => cache.invalidateQueries([PHONEBOOK]),
    }
  );
}

export function usePhonebookUpdate() {
  const cache = useQueryClient();
  return useMutation(
    (args: [TIds, TAgendaTelefone]) => {
      return agendaTelefoneService.update(...args);
    },
    {
      onSuccess: () => cache.invalidateQueries([PHONEBOOK]),
    }
  );
}
