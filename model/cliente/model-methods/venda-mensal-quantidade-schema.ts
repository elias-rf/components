import type { TPeriodo } from "../cliente.type";
import { getSchema } from "./get-shema";

export async function vendaMensalQuantidadeSchema(args: TPeriodo) {
  return getSchema(args);
}
