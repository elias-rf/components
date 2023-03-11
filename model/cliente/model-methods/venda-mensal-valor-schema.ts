import type { TPeriodo } from "../cliente.type";
import { getSchema } from "./get-shema";

export async function vendaMensalValorSchema(args: TPeriodo) {
  return getSchema(args);
}
