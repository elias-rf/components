import { isEmpty } from "../../../utils";

import { fetcherRpc } from "../lib/http/fetcher-rpc";
import { rpcFactory } from "../lib/http/rpc.factory";

type PermissaoRecord = { idSubject: string; idGroup: string };

export const permissaoService = {
  ...rpcFactory("permissao"),
  async can(idSubject: string, idGroup: string) {
    let response = await fetcherRpc("permissaoRead", {
      id: [idSubject, idGroup],
    });
    let rsp = !isEmpty(response);

    // Cadastra novas permissões para o grupo dev
    if (!rsp && idGroup === "dev") {
      response = await await fetcherRpc("permissaoCreate", {
        rec: {
          idSubject,
          idGroup,
        },
      });
      rsp = response.length > 0;
    }
    return rsp;
  },

  clear() {
    return {
      idSubject: "",
      idGroup: "",
    };
  },
};
