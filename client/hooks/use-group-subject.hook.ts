import { TIds, TOrder, TWhere } from "../../types";
import { isEmpty } from "../../utils/identify/is_empty";
import {
  groupSubjectService,
  TGroupSubject,
} from "../service/group-subject.service";

const UM_MINUTO = 60 * 1000;

const GROUP_SUBJECT = "groupSubject";
const GROUP_SUBJECT_SCHEMA = "groupSubjectSchema";

export function useGroupSubjectList(where: TWhere[], orderBy: TOrder[]) {
  return useQuery(
    [GROUP_SUBJECT, where, orderBy],
    ({ queryKey }) => {
      const [_key, where, orderBy] = queryKey as [string, TWhere[], TOrder[]];
      return groupSubjectService.list(where, orderBy);
    },
    {
      staleTime: UM_MINUTO,
    }
  );
}

export function useGroupSubjectRead(id: TIds) {
  return useQuery(
    [GROUP_SUBJECT, id],
    ({ queryKey }) => {
      const [_key, id] = queryKey as [string, TIds];
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
    (args: [TIds]) => {
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
    (args: [TIds, TGroupSubject]) => {
      return groupSubjectService.update(...args);
    },
    {
      onSuccess: () => cache.invalidateQueries([GROUP_SUBJECT]),
    }
  );
}
