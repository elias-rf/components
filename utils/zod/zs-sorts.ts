import { zd } from "./zod";

export const zsSorts = zd.array(
  zd.object({ id: zd.string(), desc: zd.boolean() })
);
