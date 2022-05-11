import isEmpty from "@/utils/is/is-empty";
import { KnexRequest } from "@/lib/knex/knex-request";

export default function EmProcessoOperacaoService(client: KnexRequest) {
  const service = {
    schema: async () => {
      const response = {
        schemaEmProcessoOperacao: {
          pk: ["operacao"],
          fields: [
            {
              field: "operacao",
              label: "Operação",
              type: "ID",
            },
            {
              field: "nome",
              label: "Nome",
              type: "String",
            },
            {
              field: "quantidade",
              label: "Quantidade",
              type: "Int",
            },
          ],
        },
      };
      return response.schemaEmProcessoOperacao;
    },

    list: async (modelo: string) => {
      if (isEmpty(modelo)) {
        return [];
      }
      const response = await client("oftalmo", {
        raw: `
          query ListEmProcessoOperacao($modelo: String!) {
            listEmProcessoOperacao(modelo: $modelo) {
              operacao
              nome
              quantidade
            }
          }
        `,
        variables: { modelo },
      });
      return response.listEmProcessoOperacao;
    },
  };
  return service;
}
