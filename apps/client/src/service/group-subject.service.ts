import { TGroupSubjectRecord } from "@er/server/src/model/oftalmo/group-subject.model";
import { isEmpty } from "@er/utils/src/is-empty";
import { rpcFactory } from "../lib/http/rpc.factory";

export type { TGroupSubjectRecord };

export const groupSubjectService = {
  ...rpcFactory<TGroupSubjectRecord>("groupSubject"),

  async can(idGroup: string, idSubject: string) {
    const response = await groupSubjectService.read([idGroup, idSubject]);
    const permitted = !isEmpty(response);

    // Cadastra novas permissões para o grupo dev
    // if (idGroup === "dev") {
    //   if (!permitted) {
    //     console.log(
    //       `🚀 ~ file: group-subject.service.ts ~ line 26 ~ can ~ permitted`,
    //       permitted
    //     );
    //     await groupSubjectService.create({
    //       idGroup,
    //       idSubject,
    //     });
    //   }
    //   permitted = true;
    // }

    return permitted;
  },

  clear() {
    return {
      idGroup: "",
      idSubject: "",
    };
  },
};
