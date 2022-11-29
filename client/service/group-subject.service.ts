import { TGroupSubject } from "../../types/group-subject.type";
import { isEmpty } from "../../utils/identify/is_empty";
import { rpcFactory } from "../lib/http/rpc.factory";

export type { TGroupSubject };

export const groupSubjectService = {
  ...rpcFactory<TGroupSubject>("group_subject"),

  async can(group_id: string, subject_id: string) {
    const response = await groupSubjectService.read({ group_id, subject_id });
    const permitted = !isEmpty(response);

    return permitted;
  },

  clear() {
    return {
      group_id: "",
      subject_id: "",
    };
  },
};
