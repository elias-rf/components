import { Where, OrderBy } from "types";
import type { KnexRequest } from "../../lib/knex/knex-request";

type AuthUserInput = {
  kUsuario?: string;
  NomeUsuario: string;
  nome: string;
  idGroup: string;
  Ativo: boolean;
};

export default function AuthUserService(client: KnexRequest) {
  const service = {
    schema: async () => {
      const response = {
        schemaAuthUser: {
          pk: ["kUsuario"],
          fields: [
            {
              field: "kUsuario",
              label: "Código do usuário",
              type: "ID",
            },
            {
              field: "NomeUsuario",
              label: "Login",
              type: "String",
            },
            {
              field: "idGroup",
              label: "Grupo de segurança",
              type: "String",
            },
            {
              field: "Ativo",
              label: "Cadastro ativo",
              type: "Int",
            },
            {
              field: "nome",
              label: "Nome",
              type: "String",
            },
          ],
        },
      };
      return response.schemaAuthUser;
    },

    list: async (where?: Where[], order?: OrderBy[]) => {
      const response = await client("oftalmo", {
        from: "tbl_seguranca_usuario",
        select: ["kUsuario", "NomeUsuario", "nome", "idGroup", "Ativo"],
        where: where,
        orderBy: order,
      });
      return response;
    },

    read: async ([kUsuario]: string[]) => {
      const response = await client("oftalmo", {
        from: "tbl_seguranca_usuario",
        where: [["kUsuario", "=", kUsuario]],
      });
      return response[0];
    },

    create: async (input: AuthUserInput) => {
      const response = await client("oftalmo", {
        from: "tbl_seguranca_usuario",
        insert: input,
      });
      return response;
    },

    update: async ([kUsuario]: string[], input: AuthUserInput) => {
      const response = await client("oftalmo", {
        from: "tbl_seguranca_usuario",
        where: [["kUsuario", "=", kUsuario]],
        update: input,
      });
      return response;
    },

    del: async ([kUsuario]: string | string[]) => {
      const response = await client("oftalmo", {
        from: "tbl_seguranca_usuario",
        where: [["kUsuario", "=", kUsuario]],
        del: ["kUsuario"],
      });
      return response;
    },

    clear: () => {
      return {
        id: "",
        name: "",
        department: "",
        email: "",
      };
    },
  };
  return service;
}
