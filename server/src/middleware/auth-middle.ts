import type { Context, Next } from "koa";
import config from "../config";
import jwtDecode from "../lib/jwt-decode";

/**
 * Middleware recebe cookie JWT e decodifica para ctx.state.currentUser
 */
export default async function authMiddle(ctx: Context, next: Next) {
  const token = ctx.cookies.get("token") || "";
  try {
    ctx.state.currentUser = await jwtDecode(token, config.auth.secret || "");
  } catch (e) {
    ctx.state.currentUser = {};
  }
  return next();
}
