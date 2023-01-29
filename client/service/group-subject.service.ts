import { TGroupSubjectRpc } from "../../types/group-subject.type";
import { isEmpty } from "../../utils/identify/is_empty";
import { deepmerge } from "../../utils/object/deepmerge";
import { rpcFactory } from "../lib/http/rpc.factory";

const SERVICE = "groupSubject";

export const groupSubjectService: TGroupSubjectRpc = deepmerge(
  rpcFactory<TGroupSubjectRpc>(SERVICE),
  {
    query: {
      async can(args) {
        const response = await groupSubjectService.query.read(args);
        const permitted = !isEmpty(response);
        return permitted;
      },
    },
  } as TGroupSubjectRpc
);
