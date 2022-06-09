import isEmpty from "@/utils/is/is-empty";
import { KnexRequest } from "@/lib/knex/knex-request";

export default function EmProcessoModeloService(client: KnexRequest) {
  const service = {
    schema: async () => {
      const response = {
        schemaEmProcessoModelo: {
          pk: ["modelo"],
          fields: [
            {
              field: "modelo",
              label: "Modelo",
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
      return response.schemaEmProcessoModelo;
    },

    list: async (produto: string) => {
      if (isEmpty(produto)) {
        return [];
      }
      const response = await client("oftalmo", {
        raw: `
          query ListEmProcessoModelo($produto: String!) {
            listEmProcessoModelo(produto: $produto) {
              modelo
              quantidade
            }
          }
        `,
      });
      return response.listEmProcessoModelo;
    },
  };
  return service;
}
