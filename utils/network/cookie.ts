import { CookieSerializeOptions, serialize } from "cookie";
import { Response } from "express";
/**
 * This sets `cookie` on `res` object
 */
export function setCookie(
  res: Response,
  name: string,
  value: string,
  options: CookieSerializeOptions = {}
) {
  console.log(`🚀 ~ file: cookie.ts:15 ~ options:`, options);
  res.cookie(name, value, options);
}

/**
 * This resets `cookie` on `res` object
 */
export function resetCookie(res: Response, name: string) {
  res.cookie(
    "Set-Cookie",
    serialize(name, "", {
      path: "/",
      maxAge: -1,
      expires: new Date(Date.now() - 1000),
    })
  );
}
