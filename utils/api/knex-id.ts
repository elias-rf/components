import { TIds } from "@/types";

const where = (type: string, builder: any, ids: TIds) => {
  ids.forEach((id) => {
    return builder.where(id.id, id.value);
  });
};

/**
 * Converte o filter do cliente para where do servidor
 */
export const knexId = (
  ids: TIds = [],
  schema: { field: string; name: string }[]
) => {
  const conv = schema.reduce<Record<string, string>>((resp, item) => {
    resp[item.name] = item.field;
    return resp;
  }, {});
  ids = ids.map((id) => ({
    id: conv[id.id] || id.id,
    value: id.value,
  }));

  return (builder: any) => {
    where("where", builder, ids);
  };
};
