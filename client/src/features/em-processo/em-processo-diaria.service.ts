import isEmpty from "@/utils/is/is-empty";
import { KnexRequest } from "@/lib/knex/knex-request";

export default function EmProcessoDiariaService(client: KnexRequest) {
  const service = {
    schema: async () => {
      const response = {
        schemaEmProcessoDiaria: {
          pk: ["dia"],
          fields: [
            {
              field: "dia",
              label: "Dia",
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
      return response.schemaEmProcessoDiaria;
    },

    list: async (modelo: string, operacao: string) => {
      if (isEmpty(modelo) || isEmpty(operacao)) {
        return [];
      }
      const response = await client("oftalmo", {
        raw: `
          query ListEmProcessoDiaria($modelo: String!, $operacao: String!) {
            listEmProcessoDiaria(modelo: $modelo, operacao: $operacao) {
              dia
              quantidade
            }
          }
        `,
        variables: { modelo, operacao },
      });
      return response.listEmProcessoDiaria;
    },
  };
  return service;
}
