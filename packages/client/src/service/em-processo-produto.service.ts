import { KnexRequest } from "@/lib/knex/knex-request";

export default function EmProcessoProdutoService(client: KnexRequest) {
  const service = {
    schema: async () => {
      const response = {
        schemaEmProcessoProduto: {
          pk: ["produto"],
          fields: [
            {
              field: "produto",
              label: "Produto",
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
      return response.schemaEmProcessoProduto;
    },

    list: async () => {
      const response = await client("oftalmo", {
        raw: `
          query ListEmProcessoProduto {
            listEmProcessoProduto {
              produto
              quantidade
            }
          }
        `,
      });
      return response.listEmProcessoProduto;
    },
  };
  return service;
}
