import crypto from "crypto";

export async function hash(text: string, algoritm: string) {
  const h = crypto.createHash(algoritm);
  h.update(text);
  return h.digest("hex");
}
