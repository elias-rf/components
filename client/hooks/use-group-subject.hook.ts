import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Ids, Order, Where } from "../../types";
import { isEmpty } from "../../utils/identify/is-empty";
import {
  groupSubjectService,
  TGroupSubject,
} from "../service/group-subject.service";

const UM_MINUTO = 60 * 1000;

const GROUP_SUBJECT = "groupSubject";
const GROUP_SUBJECT_SCHEMA = "groupSubjectSchema";

export function useGroupSubjectList(where: Where[], orderBy: Order[]) {
  return useQuery(
    [GROUP_SUBJECT, where, orderBy],
    ({ queryKey }) => {
      const [_key, where, orderBy] = queryKey as [string, Where[], Order[]];
      return groupSubjectService.list(where, orderBy);
    },
    {
      staleTime: UM_MINUTO,
    }
  );
}

export function useGroupSubjectRead(id: Ids) {
  return useQuery(
    [GROUP_SUBJECT, id],
    ({ queryKey }) => {
      const [_key, id] = queryKey as [string, Ids];
      if (isEmpty(id)) return {};
      return groupSubjectService.read(id);
    },
    {
      staleTime: UM_MINUTO,
    }
  );
}

export function useGroupSubjectSchema() {
  return useQuery(
    [GROUP_SUBJECT_SCHEMA],
    async () => groupSubjectService.schema(),
    {
      staleTime: Infinity,
    }
  );
}

export function useGroupSubjectCreate() {
  const cache = useQueryClient();
  return useMutation(
    (args: [TGroupSubject]) => groupSubjectService.create(...args),
    {
      onSuccess: () => cache.invalidateQueries([GROUP_SUBJECT]),
    }
  );
}

export function useGroupSubjectDel() {
  const cache = useQueryClient();
  return useMutation(
    (args: [Ids]) => {
      return groupSubjectService.del(...args);
    },
    {
      onSuccess: () => cache.invalidateQueries([GROUP_SUBJECT]),
    }
  );
}

export function useGroupSubjectUpdate() {
  const cache = useQueryClient();
  return useMutation(
    (args: [Ids, TGroupSubject]) => {
      return groupSubjectService.update(...args);
    },
    {
      onSuccess: () => cache.invalidateQueries([GROUP_SUBJECT]),
    }
  );
}
