import { z } from "./zod";

export const whereSchema = z.string().array().length(3).array();
export const orderBySchema = z
  .tuple([z.string(), z.enum(["asc", "desc"])])
  .array();

export const idSchema = z.string().array();
export const limitSchema = z.number().positive();
export const recordSchema = z.record(z.any());

export function validator(
  data: any,
  label: string,
  schema: any,
  error = false
) {
  const response = schema.safeParse(data);
  if (response.success === true) {
    return null;
  }
  const msg = `${label}: ${response.error.issues[0].message}`;
  if (error) {
    return msg;
  }
  throw msg;
}
