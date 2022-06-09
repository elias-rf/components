import isEmpty from "@/utils/is/is-empty";
import { KnexRequest } from "@/lib/knex/knex-request";

export default function EmProcessoOPService(client: KnexRequest) {
  const service = {
    schema: async () => {
      const response = {
        schemaEmProcessoOP: {
          pk: ["ordemProducao"],
          fields: [
            {
              field: "ordemProducao",
              label: "Ordem de Produção",
              type: "ID",
            },
            {
              field: "quantidade",
              label: "Quantidade",
              type: "Int",
            },
          ],
        },
      };
      return response.schemaEmProcessoOP;
    },

    list: async (dia: string, modelo: string, operacao: string) => {
      if (isEmpty(dia) || isEmpty(modelo) || isEmpty(operacao)) {
        return [];
      }
      const response = await client("oftalmo", {
        raw: `
          query ListEmProcessoOP(
            $dia: String!
            $modelo: String!
            $operacao: String!
          ) {
            listEmProcessoOP(dia: $dia, modelo: $modelo, operacao: $operacao) {
              ordemProducao
              quantidade
            }
          }
        `,
      });
      return response;
    },
  };
  return service;
}
