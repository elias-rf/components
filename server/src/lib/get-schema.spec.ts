import getSchema from "./get-schema";
import { test, it, describe, expect } from "vitest";
const mockApollo = {
  executeOperation: (args: any) => {
    const rsp = {
      data: {
        __type: {
          name: "Phonebook",
          kind: "OBJECT",
          description: null,
          fields: [
            {
              name: "id",
              description: "Ramal",
              type: {
                name: null,
                kind: "NON_NULL",
                ofType: {
                  name: "ID",
                  kind: "SCALAR",
                },
                fields: null,
              },
            },
            {
              name: "name",
              description: "Nome",
              type: {
                name: null,
                kind: "NON_NULL",
                ofType: {
                  name: "String",
                  kind: "SCALAR",
                },
                fields: null,
              },
            },
            {
              name: "department",
              description: "Setor",
              type: {
                name: "String",
                kind: "SCALAR",
                ofType: null,
                fields: null,
              },
            },
            {
              name: "email",
              description: "Email",
              type: {
                name: "String",
                kind: "SCALAR",
                ofType: null,
                fields: null,
              },
            },
          ],
        },
      },
    };
    return Promise.resolve(rsp);
  },
};

describe("getSchema", () => {
  it("deve retornar schema simples", async () => {
    const mockApollo = {
      executeOperation: (args: any) => {
        const rsp = {
          data: {
            __type: {
              name: "Phonebook",
              kind: "OBJECT",
              description: null,
              fields: [
                {
                  name: "id",
                  description: "Ramal",
                  type: {
                    name: null,
                    kind: "NON_NULL",
                    ofType: {
                      name: "ID",
                      kind: "SCALAR",
                    },
                    fields: null,
                  },
                },
                {
                  name: "name",
                  description: "Nome",
                  type: {
                    name: null,
                    kind: "NON_NULL",
                    ofType: {
                      name: "String",
                      kind: "SCALAR",
                    },
                    fields: null,
                  },
                },
                {
                  name: "department",
                  description: "Setor",
                  type: {
                    name: "String",
                    kind: "SCALAR",
                    ofType: null,
                    fields: null,
                  },
                },
                {
                  name: "email",
                  description: "Email",
                  type: {
                    name: "String",
                    kind: "SCALAR",
                    ofType: null,
                    fields: null,
                  },
                },
              ],
            },
          },
        };
        return Promise.resolve(rsp);
      },
    };
    const schema = "Phonebook";
    expect(await getSchema(schema, { server: mockApollo })).toEqual({
      pk: ["id"],
      fields: [
        { field: "id", label: "Ramal", type: "ID" },
        { field: "name", label: "Nome", type: "String" },
        { field: "department", label: "Setor", type: "String" },
        { field: "email", label: "Email", type: "String" },
      ],
    });
  });
});
