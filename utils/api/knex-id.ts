import { TId } from "@/types";

const where = (type: string, builder: any, ids: TId[]) => {
  ids.forEach((id) => {
    return builder.where(id);
  });
};

/**
 * Converte o filter do cliente para where do servidor
 */
export const knexId = (
  id: TId = {},
  schema: { field: string; name: string }[]
) => {
  const conv = schema.reduce<Record<string, string>>((resp, item) => {
    resp[item.name] = item.field;
    return resp;
  }, {});

  const idList: TId[] = [];
  for (const field in id) {
    idList.push({ [conv[field]]: id[field] });
  }

  return (builder: any) => {
    where("where", builder, idList);
  };
};
