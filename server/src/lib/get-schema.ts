import { gql } from "apollo-server-koa";
import { ApolloServer } from "apollo-server-koa";
import { Context } from "../types";

export interface Schema {
  pk: string[];
  fields: { field: string; label: string; type: string }[];
}
interface SchemaQuery {
  name: string;
  kind: string;
  ofType: {
    name: string;
    kind: string;
  };
  description: string;
  fields: {
    name: string;
    description: string;
    field: string;
    type: SchemaQuery;
  }[];
}

function formatSchema(schema: SchemaQuery): Schema {
  const rsp: Schema = {
    pk: [],
    fields: [],
  };
  schema.fields.forEach((field) => {
    const fld = {
      field: field.name,
      label: field.description,
      type: field.type?.name || field.type?.ofType.name,
    };
    const sch: Schema = {
      pk: [],
      fields: [],
    };
    rsp.fields.push(fld);
  });
  rsp.pk = rsp.fields.reduce((resp, field) => {
    if (field.type === "ID") {
      resp.push(field.field);
    }
    return resp;
  }, <string[]>[]);
  return rsp;
}

async function getSchema(typeName: string, { server }: Context) {
  const resp = await server.executeOperation({
    query: gql`
      query Schema($name: String!) {
        __type(name: $name) {
          name
          kind
          description
          fields {
            name
            description
            type {
              name
              kind
              ofType {
                name
                kind
              }
            }
          }
        }
      }
    `,
    variables: { name: typeName },
  });

  const schema = <SchemaQuery>(resp.data?.__type || {});

  const rsp = formatSchema(schema);
  return rsp;
}

export default getSchema;
